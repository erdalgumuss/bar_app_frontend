import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Rapor } from '@/types/rapor'

interface RaporSonucYorumlarProps {
  yorumlar: Rapor['yorumlar']
}

export default function RaporSonucYorumlar({ yorumlar }: RaporSonucYorumlarProps) {
  return (
    <Card className="bg-gray-800 text-gray-100">
      <CardHeader>
        <CardTitle>Rapor Sonuçları ve Yorumlar</CardTitle>
      </CardHeader>
      <CardContent>
        {yorumlar ? (
          <div className="space-y-4">
            {yorumlar.bulgular && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Bulgular</h4>
                <ul className="list-disc list-inside space-y-2">
                  {yorumlar.bulgular.map((bulgu, index) => (
                    <li key={index}>{bulgu}</li>
                  ))}
                </ul>
              </div>
            )}
            {yorumlar.eylemOnerileri && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Eylem Önerileri</h4>
                <ul className="list-disc list-inside space-y-2">
                  {yorumlar.eylemOnerileri.map((oneriler, index) => (
                    <li key={index}>{oneriler}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>Yorum verisi bulunamadı.</div>
        )}
      </CardContent>
    </Card>
  )
}
