import { create } from "zustand";
import { 
  getApplications, 
  createApplication, 
  updateApplication, 
  deleteApplication, 
  getApplicationById, 
  assignLawyer 
} from "@/services/applicationService";
import { IApplication } from "@/types/application";

interface ApplicationState {
  applications: IApplication[]; // Tip güncellemesi
  currentApplication: IApplication | null;
  loading: boolean;
  error: string | null;

  fetchApplications: (filter?: Record<string, string>) => Promise<void>;
  addApplication: (data: Omit<IApplication, "id" | "createdAt" | "updatedAt">) => Promise<void>;
  updateApplication: (id: string, data: Partial<IApplication>) => Promise<void>;
  deleteApplication: (id: string) => Promise<void>;
  loadApplicationDetails: (id: string) => Promise<void>;
  assignLawyerToApplication: (id: string, lawyerId: string) => Promise<void>;
}

const useApplicationStore = create<ApplicationState>((set) => ({
  applications: [],
  currentApplication: null,
  loading: false,
  error: null,

  fetchApplications: async (filter) => {
    set({ loading: true, error: null });
    try {
      const data = await getApplications(filter);
      set({ applications: data, loading: false });
      console.log("Storedaki veriler:", data);
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
      set({ error: error.message, loading: false });
    }
  },

  addApplication: async (data) => {
    set({ loading: true, error: null });
    try {
      const newApplication = await createApplication(data);
      set((state) => ({
        applications: [...state.applications, newApplication],
        loading: false,
      }));
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
      set({ error: error.message, loading: false });
    }
  },

  updateApplication: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const updatedApplication = await updateApplication(id, data);
      set((state) => ({
        applications: state.applications.map((app) =>
          app._id === id ? updatedApplication : app
        ),
        loading: false,
      }));
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
      set({ error: error.message, loading: false });
    }
  },

  deleteApplication: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteApplication(id);
      set((state) => ({
        applications: state.applications.filter((app) => app._id !== id),
        loading: false,
      }));
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
      set({ error: error.message, loading: false });
    }
  },

  loadApplicationDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const application = await getApplicationById(id);
      set({ currentApplication: application, loading: false });
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
      set({ error: error.message, loading: false });
    }
  },

  assignLawyerToApplication: async (id, lawyerId) => {
    set({ loading: true, error: null });
    try {
      const updatedApplication = await assignLawyer(id, lawyerId);
      set((state) => ({
        applications: state.applications.map((app) =>
          app._id === id ? updatedApplication : app
        ),
        loading: false,
      }));
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
      set({ error: error.message, loading: false });
    }
  },
}));

export default useApplicationStore;
