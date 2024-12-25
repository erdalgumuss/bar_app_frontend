import apiClient from '../utils/apiClient';
import { IViolation, Development, Message } from '@/types/violation';

const ViolationService = {
  // 1. Hak İhlali Ekleme
  async createViolation(data: Partial<IViolation>): Promise<IViolation> {
    const response = await apiClient.post<IViolation>('/violations', data);
    return response.data;
  },

  // 2. Hak İhlali Güncelleme
  async updateViolation(id: string, updateData: Partial<IViolation>): Promise<IViolation> {
    const response = await apiClient.put<IViolation>(`/violations/${id}`, updateData);
    return response.data;
  },

  // 3. Hak İhlalleri Listesi
  async getViolations(filter?: Record<string, string | number | boolean>): Promise<IViolation[]> {
    const response = await apiClient.get<IViolation[]>('/violations', { params: filter });
    return response.data;
  },

  // 4. Hak İhlali Detayları
  async getViolationById(id: string): Promise<IViolation> {
    const response = await apiClient.get<IViolation>(`/violations/${id}`);
    return response.data;
  },

  // 5. Hak İhlali Silme
  async deleteViolation(id: string): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(`/violations/${id}`);
    return response.data;
  },

  // 6. Gelişme Ekleme/Güncelleme
  async updateDevelopments(id: string, developments: Development[]): Promise<IViolation> {
    const response = await apiClient.put<IViolation>(`/violations/${id}/developments`, { developments });
    return response.data;
  },

  // 7. Dosya Yükleme
  async uploadFile(id: string, file: File): Promise<IViolation> {
    const formData = new FormData();
    formData.append('file', file); // Burada `any` yerine `File` kullanılıyor
    const response = await apiClient.post<IViolation>(`/violations/${id}/files`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  // 7.1. Dosya Silme
  async deleteFile(id: string, fileName: string): Promise<IViolation> {
    const response = await apiClient.delete<IViolation>(`/violations/${id}/files`, { data: { fileName } });
    return response.data;
  },

  // 8. Mesaj Gönderme
  async sendMessage(id: string, message: Message): Promise<IViolation> {
    const response = await apiClient.post<IViolation>(`/violations/${id}/messages`, message);
    return response.data;
  },

  // 9. Hak İhlali Sonuçlandırma
  async concludeViolation(id: string, result: string): Promise<IViolation> {
    const response = await apiClient.put<IViolation>(`/violations/${id}/conclude`, { result });
    return response.data;
  },

  // 10. İstatistik ve Kategori İzleme
  async getStatistics(): Promise<{ _id: string; count: number }[]> {
    const response = await apiClient.get<{ _id: string; count: number }[]>('/violations/statistics');
    return response.data;
  },
};

export default ViolationService;
