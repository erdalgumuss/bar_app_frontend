'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'
import { deleteUser } from '@/services/userService'

interface DeleteMemberModalProps {
  isOpen: boolean
  onClose: () => void
  member: {
    id: string // `id`'yi string olarak değiştirdik (backend'deki ObjectId ile uyumlu olması için)
    name: string
  }
  onMemberDeleted: (memberId: string) => void // `onMemberDeleted` fonksiyonunu da string id ile güncelliyoruz
}

export default function DeleteMemberModal({ isOpen, onClose, member, onMemberDeleted }: DeleteMemberModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      await deleteUser(member.id) // Backend çağrısı
      onMemberDeleted(member.id) // Parent bileşeni bilgilendir
      onClose() // Modal'ı kapat
    } catch (error) {
      console.error('Üye silme hatası:', error)
      alert('Üye silinemedi. Lütfen tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Üyeyi Sil</DialogTitle>
          <DialogDescription>
            {member.name} isimli üyeyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            İptal
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? 'Siliniyor...' : 'Sil'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
