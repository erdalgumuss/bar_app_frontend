import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Durusma } from '@/types/durusma'
import dayjs from 'dayjs'

interface DurusmaDetayModalProps {
  durusma: Durusma
  onClose: () => void
}

export function DurusmaDetayModal({ durusma, onClose }: DurusmaDetayModalProps) {
  if (!durusma) return null;

  const formattedDate = dayjs(durusma.tarih).format('DD MMMM YYYY');
  const formattedTime = durusma.saat || 'Saat bilgisi yok';

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{durusma.davaAdi || durusma.title || 'Bilinmeyen Etkinlik'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <Badge variant="outline">{formattedDate}</Badge>
            <span className="text-sm font-medium">{formattedTime}</span>
          </div>
          {durusma.mahkeme && (
            <div>
              <h4 className="font-semibold mb-1">Mahkeme</h4>
              <p className="text-sm">{durusma.mahkeme}</p>
            </div>
          )}
          {durusma.type && (
            <div>
              <h4 className="font-semibold mb-1">Etkinlik Türü</h4>
              <Badge>{durusma.type}</Badge>
            </div>
          )}
          <div>
            <h4 className="font-semibold mb-1">Notlar</h4>
            <p className="text-sm">
              Bu alanda duruşma veya etkinlik ile ilgili notlar yer alacak.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
