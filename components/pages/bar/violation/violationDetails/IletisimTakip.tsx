import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { IViolation, Message } from '@/types/violation'

interface IletisimTakipProps {
  hakIhlali: IViolation
  onChange: (field: keyof IViolation | 'applicant.contact', value: string | IViolation[keyof IViolation]) => void
}

export default function IletisimTakip({ hakIhlali, onChange }: IletisimTakipProps) {
  const [yeniMesaj, setYeniMesaj] = useState('')

  const handleMesajGonder = () => {
    if (yeniMesaj.trim()) {
      const yeniMesajlar: Message[] = [
        ...(hakIhlali.messages || []),
        {
          sender: 'Baro Yetkilisi',
          message: yeniMesaj,
          date: new Date(),
        },
      ]
      onChange('messages', yeniMesajlar)
      setYeniMesaj('')
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="iletisimBilgisi">İletişim Bilgisi</Label>
        <Input
          id="iletisimBilgisi"
          value={hakIhlali.applicant.contact}
          onChange={(e) => onChange('applicant.contact', e.target.value)}
          className="bg-gray-700 text-gray-100"
        />
      </div>
      <div>
        <Label>Mesaj Geçmişi</Label>
        {hakIhlali.messages &&
          hakIhlali.messages.map((mesaj, index) => (
            <div key={index} className="bg-gray-700 p-2 rounded mt-2">
              <p className="text-sm text-gray-300">
                {mesaj.sender} - {new Date(mesaj.date).toLocaleString()}
              </p>
              <p>{mesaj.message}</p>
            </div>
          ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="yeniMesaj">Yeni Mesaj</Label>
        <Textarea
          id="yeniMesaj"
          value={yeniMesaj}
          onChange={(e) => setYeniMesaj(e.target.value)}
          className="bg-gray-700 text-gray-100"
          rows={3}
        />
        <Button onClick={handleMesajGonder}>Mesaj Gönder</Button>
      </div>
    </div>
  )
}
