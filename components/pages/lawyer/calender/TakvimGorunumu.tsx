'use client'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDay } from 'react-day-picker'

interface Durusma {
  id: string
  tarih: Date
  saat?: string
  davaAdi?: string
  title?: string
  mahkeme?: string
  type?: 'durusma' | 'belge' | 'toplanti'
}

interface TakvimGorunumuProps {
  selectedDate: Date | null
  onSelectDate: (date: Date | null) => void
  onSelectDurusma: (durusma: Durusma) => void
  events: Durusma[] // Mock veriler buradan alınacak
}

export function TakvimGorunumu({ selectedDate, onSelectDate, onSelectDurusma, events }: TakvimGorunumuProps) {
  const getDayContent = (day: CalendarDay | undefined) => {
    if (!day) return null;

    // CalendarDay'i Date'e dönüştür
    const date =
      day instanceof Date
        ? day
        : typeof day === 'object' && 'toDate' in day && typeof day.toDate === 'function'
        ? day.toDate()
        : new Date(String(day));

    const dayEvents = events.filter(
      (event) => event.tarih && event.tarih.getTime() === date.getTime()
    );

    if (dayEvents.length > 0) {
      return (
        <div className="flex flex-col items-center">
          <span>{date.getDate()}</span>
          <Badge
            variant={dayEvents[0].type === 'durusma' ? 'destructive' : 'default'}
            className="w-2 h-2 rounded-full p-0"
          />
        </div>
      );
    }

    return <span>{date.getDate()}</span>;
  };

  return (
    <Card className="w-full">
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          className="rounded-md border"
          components={{
            Day: ({ day }) => (day ? getDayContent(day) : null),
          }}
        />
        {selectedDate && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Seçili Tarih Etkinlikleri</h3>
            {events
              .filter(
                (event) =>
                  event.tarih &&
                  selectedDate &&
                  event.tarih.getTime() === selectedDate.getTime()
              )
              .map((event) => (
                <div
                  key={event.id}
                  className="mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                  onClick={() => onSelectDurusma(event)}
                >
                  <Badge
                    variant={event.type === 'durusma' ? 'destructive' : 'default'}
                    className="mr-2"
                  >
                    {event.type}
                  </Badge>
                  {event.davaAdi || event.title}
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
