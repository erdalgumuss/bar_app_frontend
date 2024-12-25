'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IApplication } from '@/types/application'; // Tipleri import ettik

interface ApplicationFormProps {
  application?: IApplication | null; // Mevcut başvuru nesnesi (opsiyonel)
  onClose: () => void; // Form kapatma işlevi
  onSubmit: (data: IApplication) => void; // Form gönderme işlevi
}

export default function ApplicationForm({ application, onClose, onSubmit }: ApplicationFormProps) {
  const [formData, setFormData] = useState<IApplication>({
    applicantName: '',
    contactDetails: {
      email: '',
      phone: '',
      address: '',
    },
    eventTitle: '',
    eventCategory: 'isHukuku',
    status: 'beklemede',
    date: new Date().toISOString().split('T')[0],
    description: '',
    documents: [],
    messages: [],
    history: [],
    priority: 'orta',
  });

  useEffect(() => {
    if (application) {
      setFormData({ ...application });
    }
  }, [application]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    if (['email', 'phone', 'address'].includes(name)) {
      setFormData((prevState) => ({
        ...prevState,
        contactDetails: {
          ...prevState.contactDetails,
          [name]: value,
        },
      }));
    } else if (name === 'eventCategory') {
      setFormData((prevState) => ({
        ...prevState,
        eventCategory: value as IApplication['eventCategory'], // Türü açıkça belirttik
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle>{application ? 'Başvuru Düzenle' : 'Yeni Başvuru Ekle'}</DialogTitle>
          <DialogDescription>Lütfen başvuru bilgilerini eksiksiz doldurunuz.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="applicantName">Başvuran Adı</Label>
            <Input
              id="applicantName"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              name="email"
              value={formData.contactDetails.email}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.contactDetails.phone}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adres</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.contactDetails.address}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventTitle">Başvuru Başlığı</Label>
            <Input
              id="eventTitle"
              name="eventTitle"
              value={formData.eventTitle}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventCategory">Başvuru Kategorisi</Label>
            <Select
              name="eventCategory"
              value={formData.eventCategory}
              onValueChange={(value) =>
                setFormData((prevState) => ({
                  ...prevState,
                  eventCategory: value as IApplication['eventCategory'], // Türü açıkça belirttik
                }))
              }
            >
              <SelectTrigger className="bg-gray-700 text-gray-100">
                <SelectValue placeholder="Kategori seçin" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-gray-100">
                <SelectItem value="isHukuku">İş Hukuku</SelectItem>
                <SelectItem value="egitimHakki">Eğitim Hakkı</SelectItem>
                <SelectItem value="ifadeOzgurlugu">İfade Özgürlüğü</SelectItem>
                <SelectItem value="kadinaKarsiSiddet">Kadına Karşı Şiddet</SelectItem>
                <SelectItem value="cocukHaklari">Çocuk Hakları</SelectItem>
              </SelectContent>
            </Select>

          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Başvuru Tarihi</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Açıklama</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray-700 text-gray-100"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {application ? 'Güncelle' : 'Ekle'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
