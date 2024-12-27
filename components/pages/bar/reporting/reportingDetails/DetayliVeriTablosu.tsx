import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Rapor } from '@/types/rapor'

interface DetayliVeriTablosuProps {
  detaylar: Rapor['detaylar']
}

export default function DetayliVeriTablosu({ detaylar }: DetayliVeriTablosuProps) {
  return (
    <Card className="bg-gray-800 text-gray-100">
      <CardHeader>
        <CardTitle>Detaylı Veri Tablosu</CardTitle>
      </CardHeader>
      <CardContent>
        {detaylar && detaylar.length > 0 ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dava Türü</TableHead>
                  <TableHead>Başvuran</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead>Avukat</TableHead>
                  <TableHead>Süre</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {detaylar.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.davaTuru}</TableCell>
                    <TableCell>{row.basvuran}</TableCell>
                    <TableCell>{row.durum}</TableCell>
                    <TableCell>{row.tarih}</TableCell>
                    <TableCell>{row.avukat}</TableCell>
                    <TableCell>{row.sure}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Button variant="outline">Excel olarak İndir</Button>
            </div>
          </>
        ) : (
          <div>Tablo verisi bulunamadı.</div>
        )}
      </CardContent>
    </Card>
  )
}
