// geçici olarak mock data ile çalışması için eklenmiştir

export interface Rapor {
    id: number;
    baslik: string;
    tur: string;
    zamanAraligi: string;
    durum: string;
    tarih: string;
    istatistikler: {
      davaTurleri: { name: string; value: number }[];
      davaSonuclari: { name: string; value: number }[];
      trendler: { year: string; davaSayisi: number; hakIhlali: number }[];
    };
    detaylar: {
      id: number;
      davaTuru: string;
      basvuran: string;
      durum: string;
      tarih: string;
      avukat: string;
      sure: string;
    }[];
    yorumlar: {
      bulgular: string[];
      eylemOnerileri: string[];
    };
  }
  