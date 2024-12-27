import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IApplication } from "@/types/application";

interface ApplicationListProps {
  applications: IApplication[];
  onSelectApplication: (application: IApplication) => void;
  onApproveApplication: (id: string) => void;
  onOpenCase: (id: string) => void;
}

export default function ApplicationList({
  applications = [],
  onSelectApplication,
  onApproveApplication,
  onOpenCase,
}: ApplicationListProps) {
  if (!applications || applications.length === 0) {
    return <p className="text-center py-4">Henüz başvuru bulunmamaktadır.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Başvuru No</TableHead>
          <TableHead>Başvuran</TableHead>
          <TableHead>Konu</TableHead>
          <TableHead>Tarih</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead>İşlemler</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow
            key={application._id}
            className="cursor-pointer"
            onClick={() => onSelectApplication(application)} // Modal açma işlevini tetikler
          >
            <TableCell>{application._id}</TableCell> {/* Backend'den gelen başvuru numarası */}
            <TableCell>{application.applicantName}</TableCell>
            <TableCell>{application.eventTitle}</TableCell>
            <TableCell>{application.date}</TableCell>
            <TableCell>
              <Badge variant={application.status === "beklemede" ? "default" : "secondary"}>
                {application.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                {application.status === "beklemede" && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApproveApplication(application._id!);
                    }}
                  >
                    Onayla
                  </Button>
                )}
                {application.status === "işlemde" && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCase(application._id!);
                    }}
                  >
                    Dava Aç
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
