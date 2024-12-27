import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { IViolation } from '@/types/violation'

interface VakaOzetiProps {
  hakIhlali: IViolation
  onChange: (field: keyof IViolation, value: IViolation[keyof IViolation]) => void
}

export default function VakaOzeti({ hakIhlali, onChange }: VakaOzetiProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Vaka Başlığı</Label>
        <Input
          id="title"
          value={hakIhlali.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div>
        <Label htmlFor="summary">Olay Özeti</Label>
        <Textarea
          id="summary"
          value={hakIhlali.summary || ''}
          onChange={(e) => onChange('summary', e.target.value)}
          className="bg-gray-700 text-gray-100"
          rows={5}
        />
      </div>
    </div>
  )
}
