'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import BaroDashboard from '@/components/pages/bar/BaroDashboard'
import RaporBaslikOzet from '@/components/pages/bar/reporting/reportingDetails/RaporBaslikOzet'
import RaporTurKapsam from '@/components/pages/bar/reporting/reportingDetails/RaporTurKapsam'
import GrafikIstatistikler from '@/components/pages/bar/reporting/reportingDetails/GrafikIstatistikler'
import DetayliVeriTablosu from '@/components/pages/bar/reporting/reportingDetails/DetayliVeriTablosu'
import OngoreselAnalizTrendler from '@/components/pages/bar/reporting/reportingDetails/OngoreselAnalizTrendler'
import RaporSonucYorumlar from '@/components/pages/bar/reporting/reportingDetails/RaporSonucYorumlar'
import { mockRaporlar } from '@/utils/mockData'
import { Rapor } from '@/types/rapor'

export default function RaporDetayPage() {
  const { id } = useParams()
  const [rapor, setRapor] = useState<Rapor | null>(null)

  useEffect(() => {
    if (typeof id === 'string') {
      const selectedRapor = mockRaporlar.find((r) => r.id === parseInt(id, 10))
      setRapor(selectedRapor || null)
    } else {
      setRapor(null)
    }
  }, [id])

  if (!rapor) {
    return <div>Rapor bulunamadı veya yükleniyor...</div>
  }

  return (
    <BaroDashboard>
      <div className="space-y-6 bg-gray-900 text-gray-100 p-6 rounded-lg">
        <RaporBaslikOzet rapor={rapor} />
        <RaporTurKapsam rapor={rapor} />
        <GrafikIstatistikler istatistikler={rapor.istatistikler} />
        <DetayliVeriTablosu detaylar={rapor.detaylar} />
        <OngoreselAnalizTrendler trendler={rapor.istatistikler.trendler} />
        <RaporSonucYorumlar yorumlar={rapor.yorumlar} />
      </div>
    </BaroDashboard>
  )
}
