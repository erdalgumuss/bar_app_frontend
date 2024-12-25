import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Case } from '@/types/case';

interface CaseSummaryProps {
  caseData: Case; // Dava bilgisi
  onUpdate: (updatedData: Partial<Case>) => void; // Güncelleme işlevi
}

/**
 * CaseSummary Component
 * Dava adı ve özeti için güncelleme yapılmasını sağlar.
 */
export default function CaseSummary({ caseData, onUpdate }: CaseSummaryProps) {
  const [caseTitle, setCaseTitle] = useState(caseData.title); // Dava adı
  const [caseSummary, setCaseSummary] = useState(caseData.summary); // Dava özeti

  // Form gönderimi işlevi
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Güncellenen verileri üst bileşene gönder
    onUpdate({ title: caseTitle, summary: caseSummary });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Dava Adı Alanı */}
      <div className="space-y-2">
        <Label htmlFor="caseTitle">Case Title</Label>
        <Input
          id="caseTitle"
          value={caseTitle}
          onChange={(e) => setCaseTitle(e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      
      {/* Dava Özeti Alanı */}
      <div className="space-y-2">
        <Label htmlFor="caseSummary">Case Summary</Label>
        <Textarea
          id="caseSummary"
          value={caseSummary}
          onChange={(e) => setCaseSummary(e.target.value)}
          className="bg-gray-700 text-gray-100"
          rows={5}
        />
      </div>
      
      {/* Güncelleme Butonu */}
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
        Update
      </Button>
    </form>
  );
}
