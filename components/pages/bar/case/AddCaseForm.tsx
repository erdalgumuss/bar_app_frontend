'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createCase } from '@/services/caseService';
import { Case, CaseStatus, CaseCategory } from '@/types/case';
import { IApplication } from '@/types';

interface AddCaseFormProps {
  onClose: () => void;
  onSubmit: (newCase: Case) => void;
  application?: IApplication; // application prop'u opsiyonel olarak tanımlandı

}

export default function AddCaseForm({ onClose, onSubmit }: AddCaseFormProps) {
  const [newCase, setNewCase] = useState<Partial<Case>>({
    caseNumber: '',
    title: '',
    summary: '',
    applicant: {
      name: '',
      email: '',
      phone: '',
    },
    opponent: {
      name: '',
    },
    lawyer: '',
    category: undefined,
    startDate: '',
    status: 'beklemede',
  });

  const handleNestedChange = (
    category: 'applicant' | 'opponent',
    field: keyof Case['applicant'],
    value: string
  ) => {
    setNewCase((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCase((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const createdCase = await createCase(newCase);
      onSubmit(createdCase);
    } catch (error) {
      console.error('Error creating case:', error);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle>Yeni Dava Ekle</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="caseNumber">Dava Numarası</Label>
            <Input
              id="caseNumber"
              name="caseNumber"
              value={newCase.caseNumber || ''}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Dava Adı</Label>
            <Input
              id="title"
              name="title"
              value={newCase.title || ''}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary">Dava Özeti</Label>
            <Textarea
              id="summary"
              name="summary"
              value={newCase.summary || ''}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              rows={3}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Başvuran Bilgileri</Label>
            <Input
              placeholder="Adı Soyadı"
              value={newCase.applicant?.name || ''}
              onChange={(e) =>
                handleNestedChange('applicant', 'name', e.target.value)
              }
              className="bg-gray-700 text-gray-100 mb-2"
              required
            />
            <Input
              placeholder="E-posta"
              type="email"
              value={newCase.applicant?.email || ''}
              onChange={(e) =>
                handleNestedChange('applicant', 'email', e.target.value)
              }
              className="bg-gray-700 text-gray-100 mb-2"
              required
            />
            <Input
              placeholder="Telefon"
              value={newCase.applicant?.phone || ''}
              onChange={(e) =>
                handleNestedChange('applicant', 'phone', e.target.value)
              }
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="opponent">Karşı Taraf (Adı)</Label>
            <Input
              id="opponent"
              name="opponent"
              value={newCase.opponent?.name || ''}
              onChange={(e) =>
                handleNestedChange('opponent', 'name', e.target.value)
              }
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lawyer">Atanan Avukat</Label>
            <Input
              id="lawyer"
              name="lawyer"
              value={newCase.lawyer || ''}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Başlangıç Tarihi</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={newCase.startDate || ''}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Kategori</Label>
            <Select
              name="category"
              value={newCase.category || ''}
              onValueChange={(value) =>
                setNewCase((prev) => ({
                  ...prev,
                  category: value as CaseCategory,
                }))
              }
            >
              <SelectTrigger className="bg-gray-700 text-gray-100">
                <SelectValue placeholder="Kategori seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ceza">Ceza Davası</SelectItem>
                <SelectItem value="medeni">Hukuk Davası</SelectItem>
                <SelectItem value="idari">İdari Dava</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Durum</Label>
            <Select
              name="status"
              value={newCase.status || ''}
              onValueChange={(value) =>
                setNewCase((prev) => ({
                  ...prev,
                  status: value as CaseStatus,
                }))
              }
            >
              <SelectTrigger className="bg-gray-700 text-gray-100">
                <SelectValue placeholder="Durum seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aktif">Aktif</SelectItem>
                <SelectItem value="beklemede">Beklemede</SelectItem>
                <SelectItem value="tamamlandı">Tamamlandı</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              İptal
            </Button>
            <Button type="submit">Dava Ekle</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
