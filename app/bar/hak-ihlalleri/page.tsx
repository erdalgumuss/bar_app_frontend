'use client';

import { useState, useCallback, useEffect } from 'react';
import BaroDashboard from '@/components/pages/bar/BaroDashboard';
import ViolationSearchFilter from '@/components/pages/bar/violation/ViolationSearchFilter';
import ViolationList from '@/components/pages/bar/violation/ViolationList';
import ViolationCategoryTracking from '@/components/pages/bar/violation/ViolationCategoryTracking';
import ViolationResolution from '@/components/pages/bar/violation/ViolationResolution';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useViolationStore from '@/stores/useViolationStore';
import { IViolation } from '@/types/violation';

export default function ViolationManagementPage() {
  const {
    violations,
    fetchViolations,
    createViolation,
    concludeViolation,
    loading,
    error,
  } = useViolationStore();
  const [filteredViolations, setFilteredViolations] = useState<IViolation[]>([]);
  const [activeTab, setActiveTab] = useState('list');

  const fetchViolationsCallback = useCallback(fetchViolations, [fetchViolations]);

  useEffect(() => {
    fetchViolationsCallback();
  }, [fetchViolationsCallback]);

  useEffect(() => {
    setFilteredViolations(violations);
  }, [violations]);

  const handleNewViolation = async () => {
    const newViolation: Partial<IViolation> = {
      title: 'Yeni Hak İhlali',
      applicant: { name: '', contact: '' },
      category: '',
      status: 'işlemde',
      applicationDate: new Date(),
      details: '',
      developments: [],
      files: [],
      messages: [],
    };
    await createViolation(newViolation);
  };

  const handleResolution = async (updatedViolation: IViolation) => {
    await concludeViolation(updatedViolation._id!, updatedViolation.result!);
    fetchViolations(); // Güncellemeyi yansıtmak için listeyi tekrar çekiyoruz.
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <BaroDashboard>
      <div className="space-y-6 bg-gray-900 text-gray-100 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Hak İhlali Yönetimi</h1>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleNewViolation}
          >
            Yeni Hak İhlali Bildirimi
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="list">Hak İhlalleri Listesi</TabsTrigger>
            <TabsTrigger value="category">Kategori İzleme</TabsTrigger>
            <TabsTrigger value="resolution">Sonuçlandırma</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <ViolationSearchFilter
              violations={violations}
              onFilter={setFilteredViolations} // Filtrelenmiş listeyi güncelliyor.
            />
            <ViolationList
              violations={filteredViolations} // Filtrelenmiş liste gösteriliyor.
              onViolationSelect={(violation) => console.log(violation)}
            />
          </TabsContent>

          <TabsContent value="category">
            <ViolationCategoryTracking violations={violations} />
          </TabsContent>

          <TabsContent value="resolution">
            <ViolationResolution
              violations={filteredViolations}
              onResolution={handleResolution}
            />
          </TabsContent>
        </Tabs>
      </div>
    </BaroDashboard>
  );
}
