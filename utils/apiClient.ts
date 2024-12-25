import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000, // 10 saniye zaman aşımı
})

// İstek öncesi Authorization Header ekleme
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Hata yakalama
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401 && error.response.data?.message === "jwt expired") {
      const originalRequest = error.config;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          console.error("Yenileme tokenı bulunamadı.");
          return Promise.reject(error);
        }

        // Yeni accessToken al
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
          token: refreshToken,
        });

        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        // Yeni token ile orijinal isteği tekrar yap
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Token yenileme hatası:", refreshError);
        // Kullanıcıyı çıkışa yönlendir
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export default apiClient
