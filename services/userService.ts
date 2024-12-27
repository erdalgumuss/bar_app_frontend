import apiClient from '../utils/apiClient';
import { Lawyer, User } from '../types'; // Tipleri doğru yolu gösterecek şekilde güncelleyin

/**
 * Avukat Tam Kayıt İşlemi
 */
export const completeLawyerRegistration = async (lawyerData: {
  tcNumber: string;
  email: string;
  phone: string;
  specialization: string;
  barNumber: string;
}): Promise<void> => {
  await apiClient.post('/users/lawyers/complete-registration', lawyerData);
};

/**
 * Avukat Listesini Getir
 */
export const getLawyers = async (): Promise<Lawyer[]> => {
  const response = await apiClient.get<Lawyer[]>('/users/lawyers');
  return response.data;
};

/**
 * Kullanıcı Rolüne Göre Listeleme
 */
export const getUsersByRole = async (role: string): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users/', {
    params: { role },
  });
  return response.data;
};

/**
 * Admin Görünümünde Kullanıcıları Listele
 */
export const getAdminViewUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users/admin-view-users');
  return response.data;
};

/**
 * Yeni Kullanıcı Kaydı ve Şifre Oluşturma
 */
export const createUserWithPassword = async (userData: {
  role: string;
  tcNumber: string;
}): Promise<{ password: string }> => {
  const response = await apiClient.post<{ password: string }>('/users', userData);
  return response.data;
};
/**
 * Kullanıcı Rolünü Güncelle
 */
export const updateUserRole = async (userId: string, newRole: string): Promise<void> => {
  await apiClient.put(`/users/${userId}`, { role: newRole });
};

/**
 * Kullanıcı Silme
 */
export const deleteUser = async (userId: string): Promise<void> => {
  await apiClient.delete(`/users/${userId}`);
};