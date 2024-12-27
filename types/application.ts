export interface IContactDetails {
  email: string;
  phone: string;
  address: string;
}

export interface IDocument {
  name: string;
  type: string;
  date: string; // Tarih frontend'de genellikle string olarak tutulur
  url?: string; // Opsiyonel
}

export interface IMessage {
  sender: string;
  message: string;
  date: string; // Tarih string
}

export interface IHistory {
  date: string; // Tarih string
  action: string;
  description: string;
}

export interface IApplication {
  _id: string; // Opsiyonel ID (backend'den dönecek)
  applicantName: string;
  contactDetails: IContactDetails;
  eventTitle: string;
  eventCategory: "isHukuku" | "egitimHakki" | "ifadeOzgurlugu" | "kadinaKarsiSiddet" | "cocukHaklari";
  status: "işlemde" | "beklemede" | "tamamlandı";
  date: string; // Tarih string
  assignedLawyer?: string; // Opsiyonel Avukat ID
  description?: string; // Opsiyonel açıklama
  documents: IDocument[];
  messages: IMessage[];
  history: IHistory[];
  priority: "yüksek" | "orta" | "düşük";
  relatedCases?: string[]; // Opsiyonel İlişkili davalar (ID array)
  createdAt?: string; // Otomatik oluşturulan tarih
  updatedAt?: string; // Otomatik güncellenen tarih
}
