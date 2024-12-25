import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Case, Hearing, CaseStatus } from '@/types/case'; // Tiplerinizi kullanarak uyum sağladık

interface CaseStatusProps {
  caseData: Case; // Dava bilgisi
  onUpdate: (updatedData: Partial<Case>) => void; // Güncelleme işlevi
}

export default function CaseStatus({ caseData, onUpdate }: CaseStatusProps) {
  const [status, setStatus] = useState(caseData.status || 'active'); // Varsayılan dava durumu
  const [newHearing, setNewHearing] = useState<Hearing>({ date: '', time: '', description: '' }); // Yeni duruşma bilgisi

   // Dava durumu değişikliği
   const handleStatusChange = (value: CaseStatus) => {
    setStatus(value);
    onUpdate({ status: value });
  };

  // Yeni duruşma ekleme
  const handleAddHearing = () => {
    const updatedHearings = [...(caseData.hearings || []), newHearing];
    onUpdate({ hearings: updatedHearings });
    setNewHearing({ date: '', time: '', description: '' }); // Formu sıfırla
  };

  return (
    <div className="space-y-6">
      {/* Dava Durumu */}
      <div className="space-y-2">
        <Label htmlFor="caseStatus">Case Status</Label>
        <Select value={status} onValueChange={handleStatusChange}>
          <SelectTrigger id="caseStatus" className="bg-gray-700 text-gray-100">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-gray-100">
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="postponed">Postponed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Duruşma Takvimi */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hearing Schedule</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(caseData.hearings || []).map((hearing, index) => (
              <TableRow key={index}>
                <TableCell>{hearing.date}</TableCell>
                <TableCell>{hearing.time}</TableCell>
                <TableCell>{hearing.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Yeni Duruşma Ekleme Formu */}
        <div className="flex space-x-2">
          <Input
            type="date"
            value={newHearing.date}
            onChange={(e) => setNewHearing({ ...newHearing, date: e.target.value })}
            className="bg-gray-700 text-gray-100"
          />
          <Input
            type="time"
            value={newHearing.time}
            onChange={(e) => setNewHearing({ ...newHearing, time: e.target.value })}
            className="bg-gray-700 text-gray-100"
          />
          <Input
            placeholder="Description"
            value={newHearing.description}
            onChange={(e) => setNewHearing({ ...newHearing, description: e.target.value })}
            className="bg-gray-700 text-gray-100"
          />
          <Button onClick={handleAddHearing} className="bg-green-600 hover:bg-green-700 text-white">
            Add Hearing
          </Button>
        </div>
      </div>
    </div>
  );
}
