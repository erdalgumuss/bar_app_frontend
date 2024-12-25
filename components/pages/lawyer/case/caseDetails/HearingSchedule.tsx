import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Hearing {
  date: string; // Duruşma tarihi (ISO formatında)
  time: string; // Duruşma saati
  description?: string; // Duruşma açıklaması (opsiyonel)
}

interface HearingScheduleProps {
  caseData: {
    hearings: Hearing[];
  };
}

export function HearingSchedule({ caseData }: HearingScheduleProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [newHearing, setNewHearing] = useState<Hearing>({ date: "", time: "", description: "" });

  const handleAddHearing = () => {
    if (newHearing.date && newHearing.time) {
      console.log("Yeni duruşma:", newHearing);
      setNewHearing({ date: "", time: "", description: "" });
    } else {
      console.error("Lütfen tüm alanları doldurun.");
    }
  };

  const hearings = caseData.hearings || [];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Duruşma Takvimi</h3>
      <div className="flex space-x-4">
        {/* Takvim */}
        <div className="w-1/2">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border bg-gray-700 text-gray-100"
          />
        </div>

        {/* Duruşma Detayları */}
        <div className="w-1/2 space-y-4">
          {/* Yeni Duruşma Ekle */}
          <div>
            <h4 className="font-medium">Yeni Duruşma Ekle</h4>
            <div className="flex space-x-2 mt-2">
              <Input
                type="date"
                value={newHearing.date}
                onChange={(e) => setNewHearing({ ...newHearing, date: e.target.value })}
                className="bg-gray-700 text-gray-100"
              />
              <Input
                type="time"
                value={newHearing.time}
                onChange={(e) => setNewHearing({ ...newHearing, time: e.target.value })}
                className="bg-gray-700 text-gray-100"
              />
              <Button onClick={handleAddHearing}>Ekle</Button>
            </div>
          </div>

          {/* Yaklaşan Duruşmalar */}
          <div>
            <h4 className="font-medium">Yaklaşan Duruşmalar</h4>
            {hearings.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {hearings.map((hearing, index) => (
                  <li key={index} className="bg-gray-700 p-2 rounded">
                    <p>{hearing.date} - {hearing.time}</p>
                    {hearing.description && <p className="text-sm text-gray-400">{hearing.description}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Yaklaşan duruşma bulunmamaktadır.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
