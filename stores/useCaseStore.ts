import { create } from "zustand";
import { Case } from "@/types/case";
import {
  getAllCases,
  getCasesForLawyer,
  createCase,
  updateCase,
  deleteCase,
  getCaseById,
} from "@/services/caseService";

interface CaseState {
  cases: Case[]; // Tüm davalar
  selectedCase: Case | null; // Seçilen dava
  loading: boolean; // Yükleme durumu
  error: string | null; // Hata mesajı

  // İşlevler
  fetchCases: (isLawyer: boolean) => Promise<void>;
  fetchCaseById: (caseId: string) => Promise<void>;
  addCase: (newCase: Partial<Case>) => Promise<void>;
  updateCase: (caseId: string, updatedData: Partial<Case>) => Promise<void>;
  removeCase: (caseId: string) => Promise<void>;
}

const useCaseStore = create<CaseState>((set) => ({
  cases: [],
  selectedCase: null,
  loading: false,
  error: null,

  // Tüm davaları getir (Baro görevlisi veya avukat için)
  fetchCases: async (isLawyer) => {
    set({ loading: true, error: null });
    try {
      const response = isLawyer ? await getCasesForLawyer() : await getAllCases();
      set({ cases: response.data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Davalar alınırken hata oluştu.",
        loading: false,
      });
    }
  },

  // Belirli bir davayı ID ile getir
  fetchCaseById: async (caseId) => {
    set({ loading: true, error: null });
    try {
      const response = await getCaseById(caseId);
      set({ selectedCase: response.data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Dava bilgisi alınırken hata oluştu.",
        loading: false,
      });
    }
  },

  // Yeni dava ekle
  addCase: async (newCase) => {
    set({ loading: true, error: null });
    try {
      const response = await createCase(newCase);
      set((state) => ({ cases: [...state.cases, response], loading: false }));
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Dava eklenirken hata oluştu.",
        loading: false,
      });
    }
  },

  // Mevcut bir davayı güncelle
  updateCase: async (caseId, updatedData) => {
    set({ loading: true, error: null });
    try {
      const response = await updateCase(caseId, updatedData);
      set((state) => ({
        cases: state.cases.map((c) => (c.id === caseId ? response.data : c)),
        loading: false,
      }));
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Dava güncellenirken hata oluştu.",
        loading: false,
      });
    }
  },

  // Dava sil
  removeCase: async (caseId) => {
    set({ loading: true, error: null });
    try {
      await deleteCase(caseId);
      set((state) => ({
        cases: state.cases.filter((c) => c.id !== caseId),
        loading: false,
      }));
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Dava silinirken hata oluştu.",
        loading: false,
      });
    }
  },
}));

export default useCaseStore;
