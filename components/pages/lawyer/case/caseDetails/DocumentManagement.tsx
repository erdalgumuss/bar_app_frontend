import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Document {
  name?: string; // Belge adı
  type: string; // Belge türü
  date: string; // Yüklenme tarihi
  pdfUrl: string; // Belge PDF URL'si
}

interface DocumentManagementProps {
  caseData: {
    documents: Document[];
  };
}

export function DocumentManagement({ caseData }: DocumentManagementProps) {
  const [documents, setDocuments] = useState<Document[]>(caseData.documents || []);
  const [newDocument, setNewDocument] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState("");

  const handleUploadDocument = () => {
    if (newDocument && documentType) {
      const newDoc: Document = {
        name: newDocument.name,
        type: documentType,
        date: new Date().toISOString(),
        pdfUrl: URL.createObjectURL(newDocument),
      };
      setDocuments([...documents, newDoc]);
      setNewDocument(null);
      setDocumentType("");
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Belgeler</h3>
      <div className="flex items-center space-x-2">
        <Input
          type="file"
          accept=".pdf"
          onChange={(e) => setNewDocument(e.target.files?.[0] || null)}
          className="bg-gray-700 text-gray-100"
        />
        <Select value={documentType} onValueChange={setDocumentType}>
          <SelectTrigger className="w-[180px] bg-gray-700 text-gray-100">
            <SelectValue placeholder="Belge türü" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hearing_notes">Duruşma Notları</SelectItem>
            <SelectItem value="evidence">Delil</SelectItem>
            <SelectItem value="judgment_text">Karar Metni</SelectItem>
            <SelectItem value="other">Diğer</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleUploadDocument} disabled={!newDocument || !documentType}>
          Yükle
        </Button>
      </div>
      {documents.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Belge Adı</TableHead>
              <TableHead>Tür</TableHead>
              <TableHead>Yüklenme Tarihi</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc, index) => (
              <TableRow key={index}>
                <TableCell>{doc.name}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{new Date(doc.date).toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Görüntüle
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                        <DialogHeader>
                          <DialogTitle>{doc.name}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <iframe src={doc.pdfUrl} width="100%" height="500px" />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(doc.pdfUrl, "_blank")}
                    >
                      İndir
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>Bu dava için belge bulunmamaktadır.</p>
      )}
    </div>
  );
}
