import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { History } from '@/types/case'; // Tanımlanmış History interface'ini içe aktarın

interface CaseHistoryProps {
  history: History[]; // Dava geçmişi bilgisi
}

/**
 * CaseHistory Component
 * Dava geçmişini tablo formatında görüntüler.
 */
export default function CaseHistory({ history }: CaseHistoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Case History</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Dava geçmişindeki her işlem için bir satır oluşturur */}
          {history.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(entry.date).toLocaleDateString()}</TableCell>
              <TableCell>{entry.action}</TableCell>
              <TableCell>{entry.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
