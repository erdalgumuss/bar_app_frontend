'use client';

import { useState, useEffect } from 'react';
import BaroDashboard from '@/components/pages/bar/BaroDashboard';
import CaseSearchFilter from '@/components/pages/bar/case/CaseSearchFilter';
import CaseList from '@/components/pages/bar/case/CaseList';
import AddCaseForm from '@/components/pages/bar/case/AddCaseForm';
import CaseDetails from '@/components/pages/bar/case/CaseDetails';
import { Button } from '@/components/ui/button';
import useCaseStore from '@/stores/useCaseStore'; // Zustand Store kullanımı
import { Case } from '@/types/case';
import { toast } from '@/components/ui/use-toast';

export default function CaseManagementPage() {
  const {
    cases,
    fetchCases,
    addCase,
    updateCase,
  } = useCaseStore(); // Store'dan veri ve işlevler

  const [filteredCases, setFilteredCases] = useState<Case[]>([]);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [showAddCaseForm, setShowAddCaseForm] = useState(false);

  useEffect(() => {
   fetchCases(false).catch(()=> {
    toast({  title: 'Hata',
      description: 'Davalar yüklenirken bir hata oluştu.',
      variant: 'destructive',
    });
  }); 
    // Baro görevlisi davalarını getir
      setFilteredCases(cases);
    },[cases, fetchCases]);


  const handleFilter = (filtered: Case[]) => {
    setFilteredCases(filtered);
  };

  const handleCaseSelect = (selected: Case) => {
    setSelectedCase(selected);
  };

  const handleCaseUpdate = async (updatedCase: Case) => {
    await updateCase(updatedCase.id, updatedCase);
    setSelectedCase(null);
  };

  const handleAddCase = async (newCase: Partial<Case>) => {
    await addCase(newCase);
    setShowAddCaseForm(false);
  };

  return (
    <BaroDashboard>
      <div className="space-y-6 bg-gray-900 text-gray-100 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dava Yönetimi</h1>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => setShowAddCaseForm(true)}
          >
            Yeni Dava Ekle
          </Button>
        </div>

        <CaseSearchFilter cases={cases} onFilter={handleFilter} />

        <CaseList cases={filteredCases} onCaseSelect={handleCaseSelect} />

        {selectedCase && (
      <CaseDetails
            caseData={selectedCase} // 'case' yerine 'caseData' kullanıldı
            onClose={() => setSelectedCase(null)}
            onUpdate={handleCaseUpdate}
          />
        )}

        {showAddCaseForm && (
          <AddCaseForm
            onClose={() => setShowAddCaseForm(false)}
            onSubmit={handleAddCase}
          />
        )}
      </div>
    </BaroDashboard>
  );
}
