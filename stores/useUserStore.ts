import { create } from 'zustand';
import { User, Lawyer } from '../types'; // Tipleri doğru yoldan içeri aktarıyoruz
import { 
  getAdminViewUsers, 
  getLawyers, 
  getUsersByRole, 
  completeLawyerRegistration, 
  createUserWithPassword 
} from '../services/userService';

interface UserStore {
  users: User[]; // Tüm kullanıcıların listesi
  lawyers: Lawyer[]; // Avukatların listesi
  loading: boolean; // Yüklenme durumu
  error: string | null; // Hata mesajı
  fetchUsers: () => Promise<void>; // Kullanıcıları getir
  fetchLawyers: () => Promise<void>; // Avukatları getir
  fetchUsersByRole: (role: string) => Promise<void>; // Rol bazında kullanıcıları getir
  setUsers: (users: User[]) => void; // Kullanıcı listesini manuel olarak ayarla
  setLawyers: (lawyers: Lawyer[]) => void; // Avukat listesini manuel olarak ayarla
  completeLawyerRegistration: (lawyerData: { tcNumber: string, email: string, phone: string, specialization: string, barNumber: string }) => Promise<void>; // Avukat kaydı
  createUserWithPassword: (userData: { role: string, tcNumber: string }) => Promise<{ password: string }>; // Yeni kullanıcı oluştur ve şifre döndür
}

const useUserStore = create<UserStore>((set) => ({
  users: [],
  lawyers: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const users = await getAdminViewUsers();
      set({ users, loading: false });
    } catch (err) {
      set({
        loading: false,
        error: err instanceof Error ? err.message : 'Kullanıcılar yüklenemedi.',
      });
    }
  },
  fetchLawyers: async () => {
    set({ loading: true, error: null });
    try {
      const lawyers = await getLawyers();
      set({ lawyers, loading: false });
    } catch (err) {
      set({
        loading: false,
        error: err instanceof Error ? err.message : 'Avukatlar yüklenemedi.',
      });
    }
  },
  fetchUsersByRole: async (role: string) => {
    set({ loading: true, error: null });
    try {
      const users = await getUsersByRole(role);
      set({ users, loading: false });
    } catch (err) {
      set({
        loading: false,
        error: err instanceof Error ? err.message : 'Kullanıcılar yüklenemedi.',
      });
    }
  },
  setUsers: (users: User[]) => set({ users }),
  setLawyers: (lawyers: Lawyer[]) => set({ lawyers }),
  completeLawyerRegistration: async (lawyerData) => {
    set({ loading: true, error: null });
    try {
      await completeLawyerRegistration(lawyerData);
      set({ loading: false });
    } catch (err) {
      set({
        loading: false,
        error: err instanceof Error ? err.message : 'Avukat kaydı sırasında bir hata oluştu.',
      });
    }
  },
  createUserWithPassword: async (userData) => {
    set({ loading: true, error: null });
    try {
      const passwordData = await createUserWithPassword(userData);
      set({ loading: false });
      return passwordData;
    } catch (err) {
      set({
        loading: false,
        error: err instanceof Error ? err.message : 'Kullanıcı kaydında bir hata oluştu.',
      });
      throw err; // Şifre verisini alırken hata oluşursa, hata fırlatılır
    }
  },
}));

export default useUserStore;
    