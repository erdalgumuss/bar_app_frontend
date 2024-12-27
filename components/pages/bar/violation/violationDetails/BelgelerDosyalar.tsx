import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { IViolation, File as FileType } from '@/types/violation'

interface BelgelerDosyalarProps {
  hakIhlali: IViolation
  onChange: (field: keyof IViolation, value: IViolation[keyof IViolation]) => void
}

export default function BelgelerDosyalar({ hakIhlali, onChange }: BelgelerDosyalarProps) {
  const [yeniDosya, setYeniDosya] = useState<FileType>({
    name: '',
    type: '',
    date: new Date(),
    url: '',
  })

  const handleDosyaSecimi = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const objectURL = URL.createObjectURL(file)
      setYeniDosya({ ...yeniDosya, name: file.name, type: file.type, url: objectURL })
    }
  }

  const handleDosyaEkle = () => {
    if (yeniDosya.name && yeniDosya.type && yeniDosya.url) {
      const yeniDosyalar = [...hakIhlali.files, { ...yeniDosya, date: new Date() }]
      onChange('files', yeniDosyalar)
      setYeniDosya({ name: '', type: '', date: new Date(), url: '' })
    }
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Dosya Adı</TableHead>
            <TableHead>Tür</TableHead>
            <TableHead>Yükleme Tarihi</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hakIhlali.files &&
            hakIhlali.files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.type}</TableCell>
                <TableCell>{new Date(file.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <a href={file.url} download>
                    <Button variant="outline" size="sm">
                      İndir
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="space-y-2">
        <Label htmlFor="dosyaAdi">Dosya Adı</Label>
        <Input
          id="dosyaAdi"
          value={yeniDosya.name}
          onChange={(e) => setYeniDosya({ ...yeniDosya, name: e.target.value })}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dosyaTuru">Dosya Türü</Label>
        <Input
          id="dosyaTuru"
          value={yeniDosya.type}
          onChange={(e) => setYeniDosya({ ...yeniDosya, type: e.target.value })}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dosyaSecimi">Dosya Seç</Label>
        <Input
          id="dosyaSecimi"
          type="file"
          onChange={handleDosyaSecimi}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <Button onClick={handleDosyaEkle}>Dosya Ekle</Button>
    </div>
  )
}
