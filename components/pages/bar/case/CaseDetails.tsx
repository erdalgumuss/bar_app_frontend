'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CaseSummary from './caseDetails/CaseSummary';
import CaseParties from './caseDetails/CaseParties';
import CaseStatus from './caseDetails/CaseStatus';
import LawyerManagement from './caseDetails/LawyerManagement';
import CaseDocuments from './caseDetails/CaseDocuments';
import RightsViolation from './caseDetails/RightsViolation';
import CaseCommunication from './caseDetails/CaseCommunication';
import CaseHistory from './caseDetails/CaseHistory';
import CaseClosure from './caseDetails/CaseClosure';
import CaseStatistics from './caseDetails/CaseStatistics';
import { Case } from '@/types/case';

interface CaseDetailsProps {
  caseData: Case; // Dava bilgisi
  onClose: () => void; // Kapatma işlemi
  onUpdate: (updatedData: Partial<Case>) => void; // Güncelleme işlemi
}

export default function CaseDetails({ caseData, onClose, onUpdate }: CaseDetailsProps) {
  const [activeTab, setActiveTab] = useState('summary'); // Aktif sekme durumu

  // Güncelleme işlemi için verilen verileri birleştirir
  const handleUpdate = (updatedData: Partial<Case>) => {
    onUpdate({ ...caseData, ...updatedData });
  };

  // Eksik özellikleri tamamlamak için dava verisini normalize eder
  const normalizedCase: Case = {
    hearings: [], // Varsayılan duruşma bilgisi
    documents: [], // Varsayılan belge bilgisi
    messages: [], // Varsayılan mesaj bilgisi
    history: [], // Varsayılan tarihçe bilgisi
    ...caseData, // Mevcut dava verisi
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-100">
            {/* Dava başlığı */}
            Case Details: {normalizedCase.caseNumber}
          </DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Ana sekme listesi */}
          <TabsList className="grid w-full grid-cols-5 bg-gray-700">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="parties">Parties</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          {/* Özet Sekmesi */}
          <TabsContent value="summary">
            <CaseSummary caseData={normalizedCase} onUpdate={handleUpdate} />
          </TabsContent>
          {/* Taraflar Sekmesi */}
          <TabsContent value="parties">
            <CaseParties caseData={normalizedCase} onUpdate={handleUpdate} />
          </TabsContent>
          {/* Durum Sekmesi */}
          <TabsContent value="status">
            <CaseStatus caseData={normalizedCase} onUpdate={handleUpdate} />
          </TabsContent>
          {/* Belgeler Sekmesi */}
          <TabsContent value="documents">
            <CaseDocuments caseData={normalizedCase} onUpdate={handleUpdate} />
          </TabsContent>
          {/* Diğer Bilgiler Sekmesi */}
          <TabsContent value="others">
            <Tabs defaultValue="lawyer">
              {/* Alt sekme listesi */}
              <TabsList className="bg-gray-700">
                <TabsTrigger value="lawyer">Lawyer</TabsTrigger>
                <TabsTrigger value="rightsViolation">Rights Violation</TabsTrigger>
                <TabsTrigger value="communication">Communication</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="closure">Closure</TabsTrigger>
                <TabsTrigger value="statistics">Statistics</TabsTrigger>
              </TabsList>
              {/* Alt sekme içerikleri */}
              <TabsContent value="lawyer">
                <LawyerManagement caseData={normalizedCase} onUpdate={handleUpdate} />
              </TabsContent>
              <TabsContent value="rightsViolation">
                <RightsViolation caseData={normalizedCase} onUpdate={handleUpdate} />
              </TabsContent>
              <TabsContent value="communication">
                <CaseCommunication caseData={normalizedCase} onUpdate={handleUpdate} />
              </TabsContent>
              <TabsContent value="history">
              <CaseHistory history={normalizedCase.history} /> {/* Sadece history prop'u geçirildi */}
              </TabsContent>
              <TabsContent value="closure">
                <CaseClosure caseData={normalizedCase} onUpdate={handleUpdate} />
              </TabsContent>
              <TabsContent value="statistics">
                <CaseStatistics caseData={normalizedCase} />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
