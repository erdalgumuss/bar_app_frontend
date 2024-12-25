export interface Applicant {
  name: string; // Başvuranın adı
  contact: string; // İletişim bilgisi
}

export interface Source {
  type: string; // Kaynak türü (ör: medya, STK)
  detail?: string; // Kaynak detayları (opsiyonel)
}

export interface Development {
  date: Date; // Gelişme tarihi
  description: string; // Gelişme açıklaması
}

export interface File {
  name: string; // Dosya adı
  type: string; // Dosya türü
  date: Date; // Dosya tarihi
  url: string; // Dosyanın S3 bağlantısı
}

export interface Message {
  sender: string; // Mesaj gönderen kişi
  message: string; // Mesaj içeriği
  date: Date; // Mesaj tarihi
}

export interface IViolation {
  _id?:  string; // Mongoose ID
  title: string; // Vaka başlığı
  applicant: Applicant; // Başvuran bilgileri
  category: string; // Kategori (ör: "Kadına Karşı Şiddet", "İfade Özgürlüğü")
  source: Source; // Kaynak bilgisi
  status: "işlemde" | "tamamlandı"; // Durum seçenekleri
  applicationDate: Date; // Başvuru tarihi
  details: string; // Vaka detayları
  summary?: string; // Olay özeti (opsiyonel)
  legalRepresentative?: string; // Hukuki temsilci (opsiyonel)
  reportingAgency?: string; // Olayı bildiren kurum (opsiyonel)
  sourceDetail?: string; // Kaynağın detay bilgisi (opsiyonel)
  developments: Development[]; // Gelişmeler
  files: File[]; // Dosyalar
  messages: Message[]; // Mesajlar
  result?: string; // Sonuç (opsiyonel)
  createdAt?: Date; // Kayıt oluşturulma tarihi (otomatik)
  updatedAt?: Date; // Kayıt güncellenme tarihi (otomatik)
}
