'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import VakaOzeti from './violationDetails/VakaOzeti'
import TaraflarBilgisi from './violationDetails/TaraflarBilgisi'
import OlayKategoriKaynak from './violationDetails/OlayKategoriKaynak'
import VakaDurumuTakibi from './violationDetails/VakaDurumuTakibi'
import BelgelerDosyalar from './violationDetails/BelgelerDosyalar'
import Istatistikler from './violationDetails/Istatistikler'
import IletisimTakip from './violationDetails/IletisimTakip'
import { IViolation } from '@/types/violation'

interface HakIhlaliDetayProps {
  hakIhlali: IViolation
  onClose: () => void
  onUpdate: (updatedHakIhlali: IViolation) => void
}

export default function HakIhlaliDetay({ hakIhlali, onClose, onUpdate }: HakIhlaliDetayProps) {
  const [activeTab, setActiveTab] = useState('ozet')
  const [editedHakIhlali, setEditedHakIhlali] = useState<IViolation>(hakIhlali)

  const handleChange = (field: keyof IViolation, value: IViolation[keyof IViolation]) => {
    setEditedHakIhlali((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    onUpdate(editedHakIhlali)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Hak İhlali Detayları</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 bg-gray-700">
            <TabsTrigger value="ozet">Özet</TabsTrigger>
            <TabsTrigger value="taraflar">Taraflar</TabsTrigger>
            <TabsTrigger value="kategori">Kategori</TabsTrigger>
            <TabsTrigger value="durum">Durum</TabsTrigger>
            <TabsTrigger value="belgeler">Belgeler</TabsTrigger>
            <TabsTrigger value="istatistikler">İstatistikler</TabsTrigger>
            <TabsTrigger value="iletisim">İletişim</TabsTrigger>
          </TabsList>
          <TabsContent value="ozet">
            <VakaOzeti hakIhlali={editedHakIhlali} onChange={handleChange} />
          </TabsContent>
          <TabsContent value="taraflar">
            <TaraflarBilgisi hakIhlali={editedHakIhlali} onChange={handleChange} />
          </TabsContent>
          <TabsContent value="kategori">
            <OlayKategoriKaynak hakIhlali={editedHakIhlali} onChange={handleChange} />
          </TabsContent>
          <TabsContent value="durum">
            <VakaDurumuTakibi hakIhlali={editedHakIhlali} onChange={handleChange} />
          </TabsContent>
          <TabsContent value="belgeler">
            <BelgelerDosyalar hakIhlali={editedHakIhlali} onChange={handleChange} />
          </TabsContent>
          <TabsContent value="istatistikler">
          <Istatistikler
            data={editedHakIhlali.messages.map((mesaj, index) => ({
            name: mesaj.sender,
            vakaSayisi: index + 1, // Örnek olarak her mesajı bir vaka sayısı gibi göstermek
          }))}
            />
          </TabsContent>
          <TabsContent value="iletisim">
            <IletisimTakip hakIhlali={editedHakIhlali} onChange={handleChange} />
          </TabsContent>
        </Tabs>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            İptal
          </Button>
          <Button onClick={handleSubmit}>Kaydet</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
