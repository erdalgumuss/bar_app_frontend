import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { IViolation, Development } from '@/types/violation'

interface VakaDurumuTakibiProps {
  hakIhlali: IViolation
  onChange: (field: keyof IViolation | 'developments', value: IViolation[keyof IViolation] | Development[]) => void
}

export default function VakaDurumuTakibi({ hakIhlali, onChange }: VakaDurumuTakibiProps) {
  const [yeniGelisme, setYeniGelisme] = useState<Development>({
    date: new Date(),
    description: '',
  })

  const handleGelismeEkle = () => {
    if (yeniGelisme.date && yeniGelisme.description) {
      const yeniGelismeler: Development[] = [...hakIhlali.developments, yeniGelisme]
      onChange('developments', yeniGelismeler)
      setYeniGelisme({ date: new Date(), description: '' })
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="status">Vaka Durumu</Label>
        <Select
          value={hakIhlali.status}
          onValueChange={(value) => onChange('status', value as IViolation['status'])}
        >
          <SelectTrigger id="status" className="bg-gray-700 text-gray-100">
            <SelectValue placeholder="Durum seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="işlemde">İşlemde</SelectItem>
            <SelectItem value="tamamlandı">Tamamlandı</SelectItem>
            <SelectItem value="beklemede">Beklemede</SelectItem>
            <SelectItem value="iptal">İptal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Gelişmeler</Label>
        {hakIhlali.developments &&
          hakIhlali.developments.map((gelisme, index) => (
            <div key={index} className="bg-gray-700 p-2 rounded mt-2">
              <p className="text-sm text-gray-300">{new Date(gelisme.date).toLocaleDateString()}</p>
              <p>{gelisme.description}</p>
            </div>
          ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="yeniGelismeTarih">Yeni Gelişme Ekle</Label>
        <Input
          id="yeniGelismeTarih"
          type="date"
          value={yeniGelisme.date.toISOString().split('T')[0]}
          onChange={(e) => setYeniGelisme({ ...yeniGelisme, date: new Date(e.target.value) })}
          className="bg-gray-700 text-gray-100"
        />
        <Textarea
          value={yeniGelisme.description}
          onChange={(e) => setYeniGelisme({ ...yeniGelisme, description: e.target.value })}
          placeholder="Gelişme açıklaması"
          className="bg-gray-700 text-gray-100"
        />
        <Button onClick={handleGelismeEkle}>Gelişme Ekle</Button>
      </div>
      <div>
        <Label htmlFor="result">Sonuç</Label>
        <Textarea
          id="result"
          value={hakIhlali.result || ''}
          onChange={(e) => onChange('result', e.target.value as IViolation['result'])}
          className="bg-gray-700 text-gray-100"
          rows={3}
        />
      </div>
    </div>
  )
}
