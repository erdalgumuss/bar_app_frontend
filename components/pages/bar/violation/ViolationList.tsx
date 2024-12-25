'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IViolation } from '@/types/violation';

interface ViolationListProps {
  violations: IViolation[];
  onViolationSelect: (violation: IViolation) => void; // Gerekli özellik eklendi
}

const getCategoryColor = (category: string) => {
  const colors = {
    aileHakki: 'bg-purple-500',
    kadinaKarsiSiddet: 'bg-red-500',
    cocukHaklari: 'bg-green-500',
    ifadeOzgurlugu: 'bg-blue-500',
  };
  return colors[category] || 'bg-gray-500';
};

const getStatusColor = (status: string) => {
  const colors = {
    'İşlemde': 'bg-yellow-500',
    'Tamamlandı': 'bg-green-500',
    'İptal Edildi': 'bg-red-500',
  };
  return colors[status] || 'bg-gray-500';
};

const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('tr-TR');
};

export default function ViolationList({ violations, onViolationSelect }: ViolationListProps) {
  return (
    <Table className="border-gray-700">
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-300">Vaka Başlığı</TableHead>
          <TableHead className="text-gray-300">Başvuran Kişi</TableHead>
          <TableHead className="text-gray-300">Kategori</TableHead>
          <TableHead className="text-gray-300">Kaynak</TableHead>
          <TableHead className="text-gray-300">Durum</TableHead>
          <TableHead className="text-gray-300">Başvuru Tarihi</TableHead>
          <TableHead className="text-gray-300">İşlemler</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {violations.map((violation) => (
          <TableRow key={violation._id} className="hover:bg-gray-800 border-gray-700">
            <TableCell className="text-gray-100">{violation.title}</TableCell>
            <TableCell className="text-gray-100">{violation.applicant.name}</TableCell>
            <TableCell className="text-gray-100">
              <Badge className={`${getCategoryColor(violation.category)} text-white`}>
                {violation.category}
              </Badge>
            </TableCell>
            <TableCell className="text-gray-100">{violation.source.type}</TableCell>
            <TableCell className="text-gray-100">
              <Badge className={`${getStatusColor(violation.status)} text-white`}>
                {violation.status}
              </Badge>
            </TableCell>
            <TableCell className="text-gray-100">{formatDate(violation.applicationDate)}</TableCell>
            <TableCell>
              <Button
                onClick={() => onViolationSelect(violation)} // Gerekli işlev burada sağlandı
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Detaylar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
