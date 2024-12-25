import apiClient from "@/utils/apiClient";
import {
  Case,
  Hearing,
  Message,
  History,
  RightsViolation,
} from "@/types/case";

// 1. Dava Ekleme

export const createCase = async (data: Partial<Case>): Promise<Case> => {
  const response = await apiClient.post<Case>('/api/cases', data);
  return response.data; // Sadece yanıt verisini döndür
};
// 2. Dava Güncelleme
export const updateCase = async (caseId: string, updateData: Partial<Case>) => {
  return apiClient.put(`/cases/${caseId}`, updateData);
};

// 3. Tüm Davaları Listeleme (Baro Görevlisi)
export const getAllCases = async () => {
  return apiClient.get<Case[]>("/cases");
};

// 4. Avukat Davalarını Listeleme
export const getCasesForLawyer = async () => {
  return apiClient.get<Case[]>("/cases/lawyer");
};

// 5. Dava Detayları Getirme
export const getCaseById = async (caseId: string) => {
  return apiClient.get<Case>(`/cases/${caseId}`);
};

// 6. Dava Silme
export const deleteCase = async (caseId: string) => {
  return apiClient.delete(`/cases/${caseId}`);
};

// 7. Duruşma Güncelleme
export const updateHearings = async (
  caseId: string,
  hearings: Hearing[]
) => {
  return apiClient.put(`/cases/${caseId}/hearings`, { hearings });
};

// 8. Mesaj Gönderme
export const sendMessage = async (caseId: string, message: Message) => {
  return apiClient.post(`/cases/${caseId}/messages`, message);
};

// 9. Tarihçe Güncelleme
export const updateHistory = async (
  caseId: string,
  history: History[]
) => {
  return apiClient.put(`/cases/${caseId}/history`, { history });
};

// 10. Hak İhlali İlişkilendirme
export const associateRightsViolation = async (
  caseId: string,
  rightsViolation: RightsViolation
) => {
  return apiClient.put(`/cases/${caseId}/rights-violation`, {
    rightsViolation,
  });
};
