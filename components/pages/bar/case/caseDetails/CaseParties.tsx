import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Applicant, Opponent, Case } from '@/types/case';

interface CasePartiesProps {
  caseData: Case; // Dava bilgisi
  onUpdate: (updatedData: Partial<Case>) => void; // Güncelleme işlevi
}

/**
 * CaseParties Component
 * Allows editing of the applicant and opponent details for a case.
 */
export default function CaseParties({ caseData, onUpdate }: CasePartiesProps) {
  const [applicant, setApplicant] = useState<Applicant>(caseData.applicant); // Başvuran bilgileri
  const [opponent, setOpponent] = useState<Opponent>(caseData.opponent); // Karşı taraf bilgileri

  // Form gönderildiğinde güncellenen verileri üst seviyeye iletir
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ applicant, opponent });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Başvuran Bilgileri Kartı */}
      <Card className="bg-gray-700 text-gray-100">
        <CardHeader>
          <CardTitle>Applicant Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="applicantName">Full Name</Label>
            <Input
              id="applicantName"
              value={applicant.name}
              onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
              className="bg-gray-600 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="applicantEmail">Email</Label>
            <Input
              id="applicantEmail"
              value={applicant.email}
              onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
              className="bg-gray-600 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="applicantPhone">Phone</Label>
            <Input
              id="applicantPhone"
              value={applicant.phone}
              onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
              className="bg-gray-600 text-gray-100"
            />
          </div>
        </CardContent>
      </Card>

      {/* Karşı Taraf Bilgileri Kartı */}
      <Card className="bg-gray-700 text-gray-100">
        <CardHeader>
          <CardTitle>Opponent Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="opponentName">Full Name / Organization Name</Label>
            <Input
              id="opponentName"
              value={opponent.name}
              onChange={(e) => setOpponent({ ...opponent, name: e.target.value })}
              className="bg-gray-600 text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="opponentLawyer">Lawyer</Label>
            <Input
              id="opponentLawyer"
              value={opponent.lawyer || ''}
              onChange={(e) => setOpponent({ ...opponent, lawyer: e.target.value })}
              className="bg-gray-600 text-gray-100"
            />
          </div>
        </CardContent>
      </Card>

      {/* Güncelleme Butonu */}
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
        Update
      </Button>
    </form>
  );
}
