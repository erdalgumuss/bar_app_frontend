import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Case } from "@/types/case";
import { Lawyer } from "@/types/lawyer"; // Lawyer tipi, tanımlanmış veri yapısı için

interface LawyerManagementProps {
  caseData: Case; // Dava bilgisi
  onUpdate: (updatedData: Partial<Case>) => void; // Dava güncelleme işlevi
}

export default function LawyerManagement({
  caseData,
  onUpdate,
}: LawyerManagementProps) {
  // Seçilen avukatı takip etmek için state
  const [selectedLawyer, setSelectedLawyer] = useState<string>(caseData.lawyer || "");

  // Mock avukat verisi, backend'den çekilmelidir
  const mockLawyers: Lawyer[] = [
    { id: "1", name: "Av. Mehmet Öz", specialization: "Criminal Law" },
    { id: "2", name: "Av. Ayşe Yılmaz", specialization: "Family Law" },
    { id: "3", name: "Av. Ali Kaya", specialization: "Labor Law" },
  ];

  // Avukat atama işlemi
  const handleAssignLawyer = () => {
    // Güncelleme fonksiyonunu çağırarak seçilen avukatı atar
    onUpdate({ lawyer: selectedLawyer });
  };

  return (
    <div className="space-y-6">
      {/* Avukat seçimi */}
      <div className="space-y-2">
        <Label htmlFor="lawyerSelect">Select Lawyer</Label>
        <Select
          value={selectedLawyer}
          onValueChange={setSelectedLawyer}
        >
          <SelectTrigger className="bg-gray-700 text-gray-100">
            <SelectValue placeholder="Select a lawyer" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-gray-100">
            {mockLawyers.map((lawyer) => (
              <SelectItem key={lawyer.id} value={lawyer.id}>
                {lawyer.name} - {lawyer.specialization}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Avukat atama butonu */}
      <Button
        onClick={handleAssignLawyer}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Assign Lawyer
      </Button>

      {/* Mevcut avukat bilgileri */}
      {caseData.lawyer && (
        <Card className="bg-gray-700 text-gray-100">
          <CardHeader>
            <CardTitle>Current Lawyer Information</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mevcut avukat bilgileri */}
            <p>
              Name:{" "}
              {mockLawyers.find((lawyer) => lawyer.id === caseData.lawyer)?.name ||
                "Unknown"}
            </p>
            <p>
              Specialization:{" "}
              {mockLawyers.find((lawyer) => lawyer.id === caseData.lawyer)
                ?.specialization || "Unknown"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
