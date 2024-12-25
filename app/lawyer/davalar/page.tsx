'use client';

import { useCallback, useEffect, useState } from 'react';
import LawyerDashboard from '@/components/pages/lawyer/LawyerDashboard';
import { CaseSearchFilter } from '@/components/pages/lawyer/case/CaseSearchFilter';
import { CaseList } from '@/components/pages/lawyer/case/CaseList';
import { CaseDetails } from '@/components/pages/lawyer/case/CaseDetails';
import useCaseStore from '@/stores/useCaseStore';
import { Case } from '@/types';

export default function CasesPage() {
  const {
    cases,
    fetchCases,
    selectedCase,
    fetchCaseById,
    loading,
    error,
  } = useCaseStore();

  const [filteredCases, setFilteredCases] = useState<Case[]>(cases);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Fetch all assigned cases (for lawyer)
  useEffect(() => {
    fetchCases(true); // Fetch cases when component mounts
  }, [fetchCases]);

  // Sync filteredCases with cases whenever cases updates
  useEffect(() => {
    setFilteredCases(cases);
  }, [cases]);

  // Handle filtering
  const handleFilter = useCallback((filteredCases: Case[]) => {
    setFilteredCases(filteredCases);
  }, []);

  // Fetch and show details for a selected case
  const handleViewDetails = useCallback(
    async (id: string) => {
      await fetchCaseById(id);
      setIsDetailOpen(true);
    },
    [fetchCaseById]
  );

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p className="text-red-500">Hata: {error}</p>;
  }


  return (
    <LawyerDashboard>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Assigned Cases</h1>

        {/* Search and Filter */}
        <CaseSearchFilter onFilter={handleFilter} cases={cases} />

        {/* Case List */}
        <CaseList cases={filteredCases} onViewDetails={handleViewDetails} />

        {/* Case Details */}
        {selectedCase && (
          <CaseDetails
            caseData={selectedCase}
            isOpen={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
          />
        )}
      </div>
    </LawyerDashboard>
  );
}
