// Backend'e uyumlu Avukat Tipi
export interface Lawyer {
  id: string; // Backend'de ObjectId olarak döner (string)
  name: string; // Avukatın adı
  surname: string; // Avukatın soyadı
  specialization: string; // Uzmanlık alanı
  activeCases: number; // Aktif dava sayısı
  email: string; // E-posta
  phone: string; // Telefon numarası
  barNumber: string; // Baro numarası
}

// Yeni Avukat Tipi (Frontend'den gönderilecek veriler)
export interface NewLawyer {
  name: string; // Avukatın adı
  surname: string; // Avukatın soyadı
  specialization: string; // Uzmanlık alanı
  email: string; // E-posta
  phone: string; // Telefon numarası
  barNumber: string; // Baro numarası
}

export interface NewUser{
  tcNumber: string;
  role: 'lawyer' | 'baro_officer';
}



// Kullanıcı (User) Tipi (Admin ve Baro Memurları için)
export interface User {
  id: string; // Backend'de ObjectId
  tcNumber: string; // TC Kimlik Numarası
  name: string; // Kullanıcının adı
  surname: string; // Kullanıcının soyadı
  email?: string; // E-posta (opsiyonel)
  phone?: string; // Telefon numarası (opsiyonel)
  role: 'lawyer' | 'baro_officer' | 'admin'; // Kullanıcı rolü
  isActive: boolean; // Hesap aktif mi?
  password: string;
}

// Kullanıcı Listesi Tipi
export type UserList = User[];

// Avukat Listesi Tipi
export type LawyerList = Lawyer[];

// Backend Mock Data'sına Uygun Örnek Avukat Listesi
export const mockLawyers: Lawyer[] = [
  {
    id: '64fd6e74f95a8dcb43e9b123',
    name: 'Mehmet',
    surname: 'Yılmaz',
    specialization: 'Ceza Hukuku',
    activeCases: 5,
    email: 'mehmet@example.com',
    phone: '05551234567',
    barNumber: '12345',
  },
  {
    id: '64fd6e74f95a8dcb43e9b124',
    name: 'Ayşe',
    surname: 'Kaya',
    specialization: 'Medeni Hukuk',
    activeCases: 3,
    email: 'ayse@example.com',
    phone: '05559876543',
    barNumber: '23456',
  },
  {
    id: '64fd6e74f95a8dcb43e9b125',
    name: 'Ali',
    surname: 'Demir',
    specialization: 'İş Hukuku',
    activeCases: 7,
    email: 'ali@example.com',
    phone: '05553334444',
    barNumber: '34567',
  },
];
