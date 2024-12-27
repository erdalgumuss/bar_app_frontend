'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogHeader } from '@/components/ui/dialog'
import { createUserWithPassword } from '@/services/userService'
import {  } from '@/stores/useUserStore'
import { NewUser, User } from '@/types'

interface AddMemberModalProps {
  isOpen: boolean
  onClose: () => void
  memberType: 'lawyer' | 'baro_officer' | null
  onMemberAdded: (newMember: User) => void
}

export default function AddMemberModal({ isOpen, onClose, memberType, onMemberAdded }: AddMemberModalProps) {
  const [formData, setFormData] = useState({
    tcNumber: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validasyon
    if (!/^\d{11}$/.test(formData.tcNumber)) {
      alert('Geçerli bir TC Kimlik Numarası giriniz.')
      return
    }

  

    setIsLoading(true)

    try {
      // Backend'e gönderilecek veri
      const password = await createUserWithPassword({
        role: memberType!,
        tcNumber: formData.tcNumber,
      })
    

      const newUser: NewUser = {
        tcNumber: formData.tcNumber,
        role: memberType!,
      }

      onMemberAdded(newUser)
      setFormData({ tcNumber: '', })
    } catch (error: unknown) {
      console.error('Üye ekleme hatası:', error)
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('Üye eklenirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{memberType === 'lawyer' ? 'Avukat Ekle' : 'Baro Üyesi Ekle'}</DialogTitle>
          <DialogDescription>Lütfen yeni üye bilgilerini girin.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="tcNumber">TC Kimlik Numarası</Label>
            <Input
              id="tcNumber"
              name="tcNumber"
              value={formData.tcNumber}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Ekleniyor...' : 'Üye Ekle'}
          </Button>
        </form>
        {temporaryPassword && (
          <div className="mt-4 p-4 bg-green-100 rounded-md">
            <p className="text-green-800 font-semibold">Üye başarıyla eklendi!</p>
            <p className="text-green-700">Geçici Şifre: {temporaryPassword}</p>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>{temporaryPassword ? 'Kapat' : 'İptal'}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
