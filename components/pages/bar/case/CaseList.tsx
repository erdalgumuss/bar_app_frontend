'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Case } from "@/types/case"; // Tip kontrolü için import

interface CaseListProps {
    cases: Case[]; // Tüm davalar
    onCaseSelect: (selectedCase: Case) => void; // Bir dava seçildiğinde çağrılacak fonksiyon
  } // Bir dava seçildiğinde çağrılacak fonksiyon


/**
 * DavaListesi Bileşeni
 * Tüm davaların bir tablo halinde listelenmesini sağlar. 
 * Kullanıcılar bir dava seçtiğinde onCaseSelect işlevi tetiklenir.
 */
export default function CaseList({ cases, onCaseSelect }: CaseListProps) {

   return (
    <div>
      {/* Dava listesi tablosu */}
      <Table className="border-gray-700">
        <TableHeader>
          <TableRow className="hover:bg-gray-800 border-gray-700">
            <TableHead className="text-gray-300">Dava Numarası</TableHead>
            <TableHead className="text-gray-300">Dava Adı</TableHead>
            <TableHead className="text-gray-300">Başvuran</TableHead>
            <TableHead className="text-gray-300">Avukat</TableHead>
            <TableHead className="text-gray-300">Durum</TableHead>
            <TableHead className="text-gray-300">Başlangıç Tarihi</TableHead>
            <TableHead className="text-gray-300">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases && cases.length > 0 ? (
            cases.map((singleCase: Case) => (
              <TableRow key={singleCase.caseNumber} className="hover:bg-gray-800 border-gray-700">
                <TableCell className="text-gray-100">{singleCase.caseNumber}</TableCell>
                <TableCell className="text-gray-100">{singleCase.title}</TableCell>
                <TableCell className="text-gray-100">{singleCase.applicant.name}</TableCell>
                <TableCell className="text-gray-100">{singleCase.lawyer || "Atanmamış"}</TableCell>
                <TableCell className="text-gray-100">{singleCase.status}</TableCell>
                <TableCell className="text-gray-100">
                  {new Date(singleCase.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => onCaseSelect(singleCase)} // Detaylar butonuna basıldığında tetiklenir
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Detaylar
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-100">
                Dava bulunamadı.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}