import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { IViolation } from '@/types/violation'

const kategoriler = [
  'Aile ve Özel Yaşam Hakkı',
  'Kadına Karşı Şiddet',
  'Eğitim Hakkı',
  'İfade Özgürlüğü',
  'Adil Yargılanma Hakkı',
  'Diğer'
]

interface OlayKategoriKaynakProps {
  hakIhlali: IViolation
  onChange: (field: keyof IViolation | 'source.type' | 'source.detail', value: string) => void
}

export default function OlayKategoriKaynak({ hakIhlali, onChange }: OlayKategoriKaynakProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="kategori">Olay Kategorisi</Label>
        <Select
          value={hakIhlali.category}
          onValueChange={(value) => onChange('category', value)}
        >
          <SelectTrigger id="kategori" className="bg-gray-700 text-gray-100">
            <SelectValue placeholder="Kategori seçin" />
          </SelectTrigger>
          <SelectContent>
            {kategoriler.map((kategori) => (
              <SelectItem key={kategori} value={kategori}>{kategori}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="kaynak">Kaynak</Label>
        <Select
          value={hakIhlali.source.type}
          onValueChange={(value) => onChange('source.type', value)}
        >
          <SelectTrigger id="kaynak" className="bg-gray-700 text-gray-100">
            <SelectValue placeholder="Kaynak seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="medya">Medya</SelectItem>
            <SelectItem value="stk">STK</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="kaynakDetay">Kaynak Detayı</Label>
        <Input
          id="kaynakDetay"
          value={hakIhlali.source.detail || ''}
          onChange={(e) => onChange('source.detail', e.target.value)}
          placeholder={hakIhlali.source.type === 'medya' ? 'Medya adresi' : 'STK/STÖ bilgisi'}
          className="bg-gray-700 text-gray-100"
        />
      </div>
    </div>
  )
}
