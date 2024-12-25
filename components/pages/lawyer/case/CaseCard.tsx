import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Case } from "@/types/case";

interface CaseCardProps extends Pick<Case, 'id' | 'title' | 'caseNumber' | 'status' | 'applicant' | 'lawyer' | 'summary' | 'hearings'> {
  successRate?: number; // Opsiyonel hale getirildi
  onViewDetails: (id: string) => void;
}

export function CaseCard({
  id,
  title,
  caseNumber,
  status,
  applicant,
  lawyer,
  summary,
  successRate,
  hearings,
  onViewDetails,
}: CaseCardProps) {
  const statusColors = {
    active: "bg-green-500",
    completed: "bg-blue-500",
    pending: "bg-yellow-500",
  };

  const nextHearing = hearings?.length ? hearings[0].date : null;

  const statusLabels = {
    active: "Aktif",
    completed: "Tamamlanmış",
    pending: "Beklemede",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 text-gray-100">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <Badge className={`${statusColors[status]}`}>{statusLabels[status]}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Dava Numarası:</strong> {caseNumber}
          </p>
          <p>
            <strong>Başvuran:</strong> {applicant.name}
          </p>
          <p>
            <strong>Avukat:</strong> {lawyer}
          </p>
          <p>
            <strong>Konu:</strong> {summary}
          </p>
          <p>
            <strong>Başarı Oranı:</strong> {successRate}%
          </p>
          {nextHearing && (
            <p>
              <strong>Sonraki Duruşma:</strong> {nextHearing}
            </p>
          )}
        </div>
        <Button
          onClick={() => onViewDetails(id)}
          className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Detayları Gör
        </Button>
      </CardContent>
    </Card>
  );
}
