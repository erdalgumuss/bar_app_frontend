import { IViolation } from "@/types/violation"

export const specializations = [
  'Ceza Hukuku',
  'Medeni Hukuk',
  'İş Hukuku',
  'İdare Hukuku',
  'Ticaret Hukuku',
  'Aile Hukuku'
]

export const mockLawyers = [
  { id: 1, name: 'Av. Mehmet Yılmaz', specialization: 'Ceza Hukuku', activeCases: 5, email: 'mehmet@example.com', phone: '05551234567', barNumber: '12345' },
  { id: 2, name: 'Av. Ayşe Kaya', specialization: 'Medeni Hukuk', activeCases: 3, email: 'ayse@example.com', phone: '05559876543', barNumber: '23456' },
  { id: 3, name: 'Av. Ali Demir', specialization: 'İş Hukuku', activeCases: 7, email: 'ali@example.com', phone: '05553334444', barNumber: '34567' }
]

export const mockHakIhlali: IViolation = {
  _id: '12345',
  title: 'Kadına Karşı Şiddet',
  applicant: { name: 'Ayşe Kaya', contact: '555-1234' },
  category: 'Kadına Karşı Şiddet',
  source: { type: 'medya', detail: 'Gazete haberi' },
  status: 'işlemde',
  applicationDate: new Date(),
  details: 'Olay detayları burada yer alacak.',
  messages: [
    { sender: 'Ayşe Kaya', message: 'Dava süreci hakkında bilgi alabilir miyim?', date: new Date() },
  ],
  developments: [],
  files: [],
}


export const mockDavalar = [
  {
    id: 1,
    davaNumarasi: 'DVA2023001',
    davaAdi: 'Örnek Ceza Davası',
    davaOzeti: 'Bu bir örnek ceza davası özetidir.',
    basvuran: {
      adiSoyadi: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      telefon: '05551234567'
    },
    karsiTaraf: {
      adiSoyadi: 'XYZ Şirketi',
      avukat: 'Av. Mehmet Kaya'
    },
    avukat: 'Av. Mehmet Öz',
    durum: 'aktif',
    baslangicTarihi: '2023-01-15',
    kategori: 'ceza',
    durusmalar: [
      { tarih: '2023-02-15', saat: '10:00', aciklama: 'İlk duruşma' },
      { tarih: '2023-03-20', saat: '11:30', aciklama: 'İkinci duruşma' }
    ],
    belgeler: [
      { ad: 'Dava Dilekçesi', tur: 'PDF', tarih: '2023-01-15T10:30:00Z' },
      { ad: 'Tanık İfadesi', tur: 'DOC', tarih: '2023-02-20T14:45:00Z' }
    ],
    hakIhlali: {
      kategori: 'Kişi Özgürlüğü ve Güvenliği',
      aciklama: 'Haksız tutuklama iddiası'
    },
    mesajlar: [
      { gonderen: 'Av. Mehmet Öz', mesaj: 'Dava dosyası incelendi, ek belge gerekiyor.', tarih: '2023-01-20T09:15:00Z' },
      { gonderen: 'Baro Yetkilisi', mesaj: 'Ek belgeler talep edildi.', tarih: '2023-01-21T11:30:00Z' }
    ],
    gecmis: [
      { tarih: '2023-01-15', islem: 'Dava Açıldı', aciklama: 'Dava dilekçesi mahkemeye sunuldu.' },
      { tarih: '2023-02-15', islem: 'İlk Duruşma', aciklama: 'Taraflar dinlendi, tanık çağrılmasına karar verildi.' },
      { tarih: '2023-03-20', islem: 'İkinci Duruşma', aciklama: 'Tanıklar dinlendi, bilirkişi atanmasına karar verildi.' }
    ],
    sonuc: '',
    kapanisTarihi: '',
    kapanisAciklamasi: ''
  },
]

export const mockApplications = [
  {
    id: "1",
    applicantName: "Ahmet Yılmaz",
    eventTitle: "İş Yerinde Ayrımcılık",
    eventCategory: "isHukuku",
    status: "islemde",
    date: "2023-06-01",
    assignedLawyer: "Av. Mehmet Öz"
  },
  {
    id: "2",
    applicantName: "Ayşe Kaya",
    eventTitle: "Eğitim Hakkı İhlali",
    eventCategory: "egitimHakki",
    status: "tamamlandi",
    date: "2023-05-15",
    assignedLawyer: "Av. Zeynep Demir"
  },
  {
    id: "3",
    applicantName: "Mustafa Çelik",
    eventTitle: "İfade Özgürlüğü İhlali",
    eventCategory: "ifadeOzgurlugu",
    status: "beklemede",
    date: "2023-06-10",
    assignedLawyer: null
  }
]

export const mockRaporlar = [
  {
    id: 1,
    baslik: "2024 Yılı Dava İstatistik Raporu",
    tur: "dava",
    zamanAraligi: "Yıllık",
    durum: "Yayımlandı",
    tarih: "2024-01-15",
    istatistikler: {
      davaTurleri: [
        { name: 'Aile', value: 30 },
        { name: 'Ticaret', value: 25 },
        { name: 'Ceza', value: 20 },
        { name: 'İş', value: 15 },
        { name: 'İdare', value: 10 },
      ],
      davaSonuclari: [
        { name: 'Kazanılan', value: 60 },
        { name: 'Kaybedilen', value: 30 },
        { name: 'İptal Edilen', value: 10 },
      ],
      trendler: [
        { year: '2020', davaSayisi: 100, hakIhlali: 50 },
        { year: '2021', davaSayisi: 120, hakIhlali: 45 },
        { year: '2022', davaSayisi: 150, hakIhlali: 60 },
      ],
    },
    detaylar: [
      { id: 1, davaTuru: 'Aile', basvuran: 'Ahmet Yılmaz', durum: 'Devam Ediyor', tarih: '2024-01-15', avukat: 'Av. Mehmet Öz', sure: '3 ay' },
      { id: 2, davaTuru: 'Ticaret', basvuran: 'Ayşe Kaya', durum: 'Sonuçlandı', tarih: '2024-02-20', avukat: 'Av. Zeynep Demir', sure: '6 ay' },
    ],
    yorumlar: {
      bulgular: [
        "2024 yılında aile hukuku davaları %15 arttı.",
        "Kadına yönelik şiddet vakaları 2023'e göre %10 azaldı.",
      ],
      eylemOnerileri: [
        "Aile hukuku davalarına yönelik uzmanlaşma programı başlatılmalı.",
        "Kadına karşı şiddet vakalarında önleyici tedbirler güçlendirilmeli.",
      ],
    },
  },
];


