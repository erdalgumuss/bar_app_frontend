'use client'

import { useState } from 'react'
import AvukatDashboard from '@/components/pages/lawyer/LawyerDashboard'
import { TakvimGorunumu } from '@/components/pages/lawyer/calender/TakvimGorunumu'
import { YaklasanDurusmalar } from '@/components/pages/lawyer/calender/YaklasanDurusmalar'
import { HatirlaticiListesi } from '@/components/pages/lawyer/calender/HatirlaticiListesi'
import { DurusmaDetayModal } from '@/components/pages/lawyer/calender/DurusmaDetayModal'
import {Durusma} from '@/types/durusma'

const mockDurusmalar: Durusma[] = [
  {
    id: '1',
    tarih: new Date(2023, 11, 15),
    saat: '10:00',
    davaAdi: 'Yılmaz vs. ABC Şirketi',
    mahkeme: 'İstanbul 3. Asliye Hukuk Mahkemesi',
    type: 'durusma',
  },
  {
    id: '2',
    tarih: new Date(2023, 11, 20),
    saat: '14:00',
    title: 'Kaya Ailesi Veraset',
    type: 'belge',
  },
  {
    id: '3',
    tarih: new Date(2023, 11, 25),
    title: 'Müvekkil Görüşmesi',
    type: 'toplanti',
  },
]


export default function TakvimSayfasi() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [selectedDurusma, setSelectedDurusma] = useState<Durusma | null>(null)

  const handleDurusmaClose = () => setSelectedDurusma(null)

  return (
    <AvukatDashboard>
      <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800">Duruşma Takvimi</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TakvimGorunumu
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              onSelectDurusma={setSelectedDurusma}
              events={mockDurusmalar}
            />
          </div>
          <div className="space-y-6">
            <YaklasanDurusmalar onSelectDurusma={setSelectedDurusma} />
            <HatirlaticiListesi />
          </div>
        </div>
      </div>
      {selectedDurusma && (
        <DurusmaDetayModal
          durusma={selectedDurusma}
          onClose={handleDurusmaClose}
        />
      )}
    </AvukatDashboard>
  )
}
