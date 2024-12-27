import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { IViolation } from '@/types/violation'

interface TaraflarBilgisiProps {
  hakIhlali: IViolation
  onChange: (field: keyof IViolation | 'applicant.name' | 'applicant.contact', value: string) => void
}

export default function TaraflarBilgisi({ hakIhlali, onChange }: TaraflarBilgisiProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="applicantName">Başvuran Adı</Label>
        <Input
          id="applicantName"
          value={hakIhlali.applicant.name}
          onChange={(e) => onChange('applicant.name', e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div>
        <Label htmlFor="applicantContact">İletişim Bilgileri</Label>
        <Input
          id="applicantContact"
          value={hakIhlali.applicant.contact}
          onChange={(e) => onChange('applicant.contact', e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div>
        <Label htmlFor="details">Başvuru Metni</Label>
        <Textarea
          id="details"
          value={hakIhlali.details}
          onChange={(e) => onChange('details', e.target.value)}
          className="bg-gray-700 text-gray-100"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="legalRepresentative">Hukuki Temsilci</Label>
        <Input
          id="legalRepresentative"
          value={hakIhlali.legalRepresentative || ''}
          onChange={(e) => onChange('legalRepresentative', e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div>
        <Label htmlFor="reportingAgency">Olayı Bildiren STK veya Medya</Label>
        <Input
          id="reportingAgency"
          value={hakIhlali.reportingAgency || ''}
          onChange={(e) => onChange('reportingAgency', e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
    </div>
  )
}
