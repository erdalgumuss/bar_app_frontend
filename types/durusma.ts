//geçici çalışması için eklenen types
export interface Durusma {
    id: string
    tarih: Date
    saat?: string
    davaAdi?: string
    title?: string
    mahkeme?: string
    type?: 'durusma' | 'belge' | 'toplanti'
  }
  