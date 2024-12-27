'use client'

import { useState, useEffect } from 'react'
import BaroDashboard from '@/components/pages/bar/BaroDashboard'
import AvukatList from '@/components/pages/bar/lawyerManagement/AvukatList'
import AvukatDetay from '@/components/pages/bar/lawyerManagement/AvukatDetay'
import AvukatPerformans from '@/components/pages/bar/lawyerManagement/AvukatPerformans'
import AvukatAramaFiltre from '@/components/pages/bar/lawyerManagement/AvukatAramaFiltre'
import AvukatTakvim from '@/components/pages/bar/lawyerManagement/AvukatTakvim'
import AvukatKategorileri from '@/components/pages/bar/lawyerManagement/AvukatKategorileri'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useUserStore from '@/stores/useUserStore'
import { Lawyer } from '@/types'

export default function AvukatYonetimiPage() {
  const { lawyers, fetchLawyers,  } = useUserStore()  // Kullanıcı store'dan avukat verilerini çekiyoruz
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>(lawyers)  // Avukatları filtreliyoruz
  const [, setSelectedLawyer] = useState<Lawyer | null>(null)
  const [viewingLawyer, setViewingLawyer] = useState<Lawyer | null>(null)

  useEffect(() => {
    const loadLawyers = async () => {
      await fetchLawyers()  // Gerçek avukat verilerini çekiyoruz
    }
    loadLawyers()
  }, [fetchLawyers])

  const handleViewDetails = (lawyer: Lawyer) => {
    setViewingLawyer(lawyer)
  }

  const handleFilter = (filteredData: Lawyer[]) => {
    setFilteredLawyers(filteredData)
  }

  return (
    <BaroDashboard>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-100">Avukat Yönetimi</h1>
        </div>

        <AvukatAramaFiltre lawyers={lawyers} onFilter={handleFilter} />

        <Tabs defaultValue="list" className="w-full">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="list" className="text-gray-100 data-[state=active]:bg-gray-700">Avukat Listesi</TabsTrigger>
            <TabsTrigger value="performance" className="text-gray-100 data-[state=active]:bg-gray-700">Performans Raporları</TabsTrigger>
            <TabsTrigger value="calendar" className="text-gray-100 data-[state=active]:bg-gray-700">Takvim</TabsTrigger>
            <TabsTrigger value="categories" className="text-gray-100 data-[state=active]:bg-gray-700">Kategoriler</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <AvukatList
              lawyers={filteredLawyers}
              onSelectLawyer={setSelectedLawyer}
              onViewDetails={handleViewDetails}
            />
          </TabsContent>
          <TabsContent value="performance">
            <AvukatPerformans lawyers={filteredLawyers} />
          </TabsContent>
          <TabsContent value="calendar">
            <AvukatTakvim lawyers={filteredLawyers} />
          </TabsContent>
          <TabsContent value="categories">
            <AvukatKategorileri lawyers={filteredLawyers} onUpdateLawyer={undefined} />
          </TabsContent>
        </Tabs>

        

   

        {viewingLawyer && (
          <AvukatDetay
            lawyer={viewingLawyer}
            onClose={() => setViewingLawyer(null)}
          />
        )}
      </div>
    </BaroDashboard>
  )
}

