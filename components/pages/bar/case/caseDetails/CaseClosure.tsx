import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Case } from '@/types/case';

interface CaseClosureProps {
  caseData: Case; // Dava bilgisi
  onUpdate: (updatedData: Partial<Case>) => void; // Güncelleme fonksiyonu
}

export default function CaseClosure({ caseData, onUpdate }: CaseClosureProps) {
  const [result, setResult] = useState(caseData.result || ''); // Dava sonucu
  const [closingDate, setClosingDate] = useState(caseData.endDate || ''); // Kapanış tarihi
  const [closingNotes, setClosingNotes] = useState(caseData.closingNotes || ''); // Kapanış açıklaması

  // Kapanış işlemi
  const handleClosure = () => {
    onUpdate({
      result,
      endDate: closingDate,
      closingNotes,
      status: 'closed', // Durumu "Kapandı" olarak güncelle
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Case Closure</h3>
      <div className="space-y-2">
        {/* Dava Sonucu */}
        <Label htmlFor="result">Case Result</Label>
        <Select value={result} onValueChange={setResult}>
          <SelectTrigger id="result">
            <SelectValue placeholder="Select Result" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Accepted">Accepted</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Partially Accepted">Partially Accepted</SelectItem>
            <SelectItem value="Settled">Settled</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        {/* Kapanış Tarihi */}
        <Label htmlFor="closingDate">Closing Date</Label>
        <Input
          id="closingDate"
          type="date"
          value={closingDate}
          onChange={(e) => setClosingDate(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        {/* Kapanış Açıklaması */}
        <Label htmlFor="closingNotes">Closing Notes</Label>
        <Textarea
          id="closingNotes"
          value={closingNotes}
          onChange={(e) => setClosingNotes(e.target.value)}
          rows={4}
        />
      </div>
      <Button onClick={handleClosure} className="bg-red-600 hover:bg-red-700 text-white">
        Close Case
      </Button>
    </div>
  );
}
