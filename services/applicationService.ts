import axios from "axios";
import { IApplication } from "../types/application"; // Tip dosyasını import edin

const BASE_URL = "http://localhost:5000/api/applications"; // Backend rotalarının temel URL'si

// Başvuru Ekleme
export const createApplication = async (data: Omit<IApplication, "id" | "createdAt" | "updatedAt">): Promise<IApplication> => {
  try {
    const response = await axios.post<IApplication>(`${BASE_URL}`, data);
    return response.data;
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
    throw new Error(error?.message || "Başvuru eklenirken bir hata oluştu.");
  }
};

// Başvuru Güncelleme
export const updateApplication = async (id: string, data: Partial<IApplication>): Promise<IApplication> => {
  try {
    const response = await axios.put<IApplication>(`${BASE_URL}/${id}`, data);
    return response.data;
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
    throw new Error(error?.message || "Başvuru güncellenirken bir hata oluştu.");
  }
};

// Başvuru Listesi
export const getApplications = async (filter?: Record<string, string>): Promise<IApplication[]> => {
  try {
    const query = filter ? `?${new URLSearchParams(filter).toString()}` : "";
    const response = await axios.get<IApplication[]>(`${BASE_URL}${query}`);
    console.log("response.data services:", response.data);
    return response.data;
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
    throw new Error(error?.message || "Başvurular alınırken bir hata oluştu.");
  }
};

// Başvuru Detayları
export const getApplicationById = async (id: string): Promise<IApplication> => {
  try {
    const response = await axios.get<IApplication>(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
    throw new Error(error?.message || "Başvuru detayları alınırken bir hata oluştu.");
  }
};

// Başvuru Silme
export const deleteApplication = async (id: string): Promise<{ message: string }> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return { message: "Başvuru başarıyla silindi." };
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
    throw new Error(error?.message || "Başvuru silinirken bir hata oluştu.");
  }
};

// Avukat Atama
export const assignLawyer = async (id: string, lawyerId: string): Promise<IApplication> => {
  try {
    const response = await axios.put<IApplication>(`${BASE_URL}/${id}/assign-lawyer`, { lawyerId });
    return response.data;
  } catch (err) {
    const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
    throw new Error(error?.message || "Avukat atanırken bir hata oluştu.");
  }
};
