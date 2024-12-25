// Başvuran Bilgileri
export interface Applicant {
  name: string; // Başvuran adı
  email: string; // Başvuran e-posta adresi
  phone: string; // Başvuran telefon numarası
}

// Karşı Taraf Bilgileri
export interface Opponent {
  name: string; // Karşı taraf adı (Ad/Şirket Adı)
  lawyer?: string; // Karşı taraf avukatı (opsiyonel)
}

// Duruşma Detayları
export interface Hearing {
  date: string; // Duruşma tarihi (ISO formatında string)
  time: string; // Duruşma saati
  description: string; // Duruşma açıklaması
}

// Belge Detayları
export interface Document {
  pdfUrl: string; // Belge PDF URL'si
  name?: string; // Belge adı (opsiyonel)
  type: string; // Belge türü (ör. PDF, DOC)
  date: string; // Belge tarihi (ISO formatında string)
}

// Mesaj Detayları
export interface Message {
  sender: string; // Mesaj gönderen kişi
  message: string; // Mesaj içeriği
  date: string; // Mesaj tarihi (ISO formatında string)
}

// Tarihçe Detayları
export interface History {
  date: string; // İşlem tarihi
  action: string; // İşlem türü
  description: string; // İşlem açıklaması
}

// Hak İhlali Detayları
export interface RightsViolation {
  category: string; // Hak ihlali kategorisi
  description: string; // Hak ihlali açıklaması
}

// Dava Durumu
export type CaseStatus = "aktif" | "beklemede" | "tamamlandı" | "closed";

// Kategori Türleri
export type CaseCategory =
  | "ceza"
  | "medeni"
  | "iş"
  | "idare"
  | "ticaret"
  | "aile"; // Kategori türleri (Backend'deki `specializations` ile uyumlu)

// Case Tipi
export interface Case {
  id: string; // Dava ID'si
  caseNumber: string; // Dava numarası
  title: string; // Dava başlığı
  summary: string; // Dava özeti
  applicant: Applicant; // Başvuran bilgileri
  opponent: Opponent; // Karşı taraf bilgileri
  lawyer: string; // Atanan avukat ID'si
  status: CaseStatus; // Dava durumu
  startDate: string; // Başlangıç tarihi (ISO formatında string)
  endDate?: string; // Kapanış tarihi (opsiyonel, ISO formatında string)
  category: CaseCategory; // Dava kategorisi
  hearings: Hearing[]; // Duruşma detayları
  documents: Document[]; // Belgeler
  messages: Message[]; // Mesajlar
  history: History[]; // Tarihçe detayları
  rightsViolation?: RightsViolation; // Hak ihlali bilgisi (opsiyonel)
  result?: string; // Dava sonucu (opsiyonel)
  closingNotes?: string; // Kapanış notları (opsiyonel)
}
