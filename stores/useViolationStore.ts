import { create } from 'zustand';
import ViolationService from '@/services/violationService';
import { IViolation, Development, Message } from '@/types/violation';

interface ViolationStore {
  violations: IViolation[];
  selectedViolation: IViolation | null;
  statistics: { _id: string; count: number }[];
  loading: boolean;
  error: string | null;

  // Actions
  fetchViolations: (filter?: Record<string, string | number | boolean>) => Promise<void>;
  fetchViolationById: (id: string) => Promise<void>;
  createViolation: (data: Partial<IViolation>) => Promise<void>;
  updateViolation: (id: string, updateData: Partial<IViolation>) => Promise<void>;
  deleteViolation: (id: string) => Promise<void>;
  updateDevelopments: (id: string, developments: Development[]) => Promise<void>;
  uploadFile: (id: string, file: File) => Promise<void>;
  deleteFile: (id: string, fileName: string) => Promise<void>;
  sendMessage: (id: string, message: Message) => Promise<void>;
  concludeViolation: (id: string, result: string) => Promise<void>;
  fetchStatistics: () => Promise<void>;
}

const useViolationStore = create<ViolationStore>((set, get) => ({
  violations: [],
  selectedViolation: null,
  statistics: [],
  loading: false,
  error: null,

  // Fetch all violations
  fetchViolations: async (filter) => {
    set({ loading: true, error: null });
    try {
      const violations = await ViolationService.getViolations(filter);
      set({ violations, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Fetch a single violation by ID
  fetchViolationById: async (id) => {
    set({ loading: true, error: null });
    try {
      const violation = await ViolationService.getViolationById(id);
      set({ selectedViolation: violation, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Create a new violation
  createViolation: async (data) => {
    set({ loading: true, error: null });
    try {
      const newViolation = await ViolationService.createViolation(data);
      set({ violations: [...get().violations, newViolation], loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Update an existing violation
  updateViolation: async (id, updateData) => {
    set({ loading: true, error: null });
    try {
      const updatedViolation = await ViolationService.updateViolation(id, updateData);
      set({
        violations: get().violations.map((v) => (v._id === id ? updatedViolation : v)),
        loading: false,
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Delete a violation
  deleteViolation: async (id) => {
    set({ loading: true, error: null });
    try {
      await ViolationService.deleteViolation(id);
      set({ violations: get().violations.filter((v) => v._id !== id), loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Update developments
  updateDevelopments: async (id, developments) => {
    set({ loading: true, error: null });
    try {
      const updatedViolation = await ViolationService.updateDevelopments(id, developments);
      set({
        violations: get().violations.map((v) => (v._id === id ? updatedViolation : v)),
        loading: false,
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Upload a file
  uploadFile: async (id, file) => {
    set({ loading: true, error: null });
    try {
      const updatedViolation = await ViolationService.uploadFile(id, file);
      set({
        violations: get().violations.map((v) => (v._id === id ? updatedViolation : v)),
        loading: false,
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Delete a file
  deleteFile: async (id, fileName) => {
    set({ loading: true, error: null });
    try {
      const updatedViolation = await ViolationService.deleteFile(id, fileName);
      set({
        violations: get().violations.map((v) => (v._id === id ? updatedViolation : v)),
        loading: false,
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Send a message
  sendMessage: async (id, message) => {
    set({ loading: true, error: null });
    try {
      const updatedViolation = await ViolationService.sendMessage(id, message);
      set({
        violations: get().violations.map((v) => (v._id === id ? updatedViolation : v)),
        loading: false,
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Conclude a violation
  concludeViolation: async (id, result) => {
    set({ loading: true, error: null });
    try {
      const updatedViolation = await ViolationService.concludeViolation(id, result);
      set({
        violations: get().violations.map((v) => (v._id === id ? updatedViolation : v)),
        loading: false,
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },

  // Fetch statistics
  fetchStatistics: async () => {
    set({ loading: true, error: null });
    try {
      const statistics = await ViolationService.getStatistics();
      set({ statistics, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Hata oluştu.', loading: false });
    }
  },
}));

export default useViolationStore;
