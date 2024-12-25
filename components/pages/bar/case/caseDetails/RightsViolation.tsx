import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RightsViolation } from '@/types/case'; // Hak ihlali tipi

interface RightsViolationProps {
  caseData: { rightsViolation?: RightsViolation }; // Davaya ait hak ihlali verisi
  onUpdate: (updatedData: Partial<{ rightsViolation: RightsViolation }>) => void; // Güncelleme işlemi
}

export default function RightsViolationForm({ caseData, onUpdate }: RightsViolationProps) {
  const [rightsViolation, setRightsViolation] = useState<RightsViolation>(
    caseData.rightsViolation || { category: '', description: '' }
  );

  // Hak ihlali bilgilerini güncelle
  const handleUpdate = () => {
    onUpdate({ rightsViolation });
  };

  // Hak ihlali kategorileri
  const violationCategories = [
    'Family Rights',
    'Discrimination',
    'Right to Work',
    'Right to Education',
    'Freedom of Expression',
    'Personal Liberty and Security',
    'Property Rights',
    'Right to Health',
    'Right to Life',
  ];

  return (
    <div className="space-y-6">
      {/* Kategori seçimi */}
      <div className="space-y-2">
        <Label htmlFor="violationCategory">Violation Category</Label>
        <Select
          value={rightsViolation.category}
          onValueChange={(value) => setRightsViolation({ ...rightsViolation, category: value })}
        >
          <SelectTrigger id="violationCategory" className="bg-gray-700 text-gray-100">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-gray-100">
            {violationCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Açıklama */}
      <div className="space-y-2">
        <Label htmlFor="violationDescription">Violation Description</Label>
        <Textarea
          id="violationDescription"
          value={rightsViolation.description}
          onChange={(e) => setRightsViolation({ ...rightsViolation, description: e.target.value })}
          className="bg-gray-700 text-gray-100"
          rows={4}
        />
      </div>

      {/* Güncelleme butonu */}
      <Button onClick={handleUpdate} className="bg-blue-600 hover:bg-blue-700 text-white">
        Update
      </Button>
    </div>
  );
}
