import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Document } from "@/types/case";

interface CaseDocumentsProps {
  caseData: { documents: Document[] }; // Dava verisi
  onUpdate: (updatedData: { documents: Document[] }) => void; // Güncelleme işlemi
}

export default function CaseDocuments({ caseData, onUpdate }: CaseDocumentsProps) {
  const [newDocument, setNewDocument] = useState<{ name: string; type: string; file: File | null }>({
    name: "",
    type: "",
    file: null,
  });

  // Dosya seçimi işlemi
  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewDocument((prev) => ({ ...prev, file }));
  };

  // Yeni belge ekleme işlemi
  const handleAddDocument = () => {
    if (newDocument.name && newDocument.type && newDocument.file) {
      const updatedDocuments = [
        ...caseData.documents,
        { name: newDocument.name, type: newDocument.type, date: new Date().toISOString(), pdfUrl: "" },
      ];
      onUpdate({ documents: updatedDocuments });
      setNewDocument({ name: "", type: "", file: null });
    }
  };

  return (
    <div className="space-y-6">
      {/* Mevcut belgelerin listesi */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Case Documents</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {caseData.documents.map((document, index) => (
              <TableRow key={index}>
                <TableCell>{document.name}</TableCell>
                <TableCell>{document.type}</TableCell>
                <TableCell>{new Date(document.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(document.pdfUrl, "_blank")}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Yeni belge ekleme formu */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Add New Document</h3>
        <div className="space-y-2">
          <Label htmlFor="documentName">Document Name</Label>
          <Input
            id="documentName"
            value={newDocument.name}
            onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
            className="bg-gray-700 text-gray-100"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="documentType">Document Type</Label>
          <Input
            id="documentType"
            value={newDocument.type}
            onChange={(e) => setNewDocument({ ...newDocument, type: e.target.value })}
            className="bg-gray-700 text-gray-100"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="documentFile">Select File</Label>
          <Input
            id="documentFile"
            type="file"
            onChange={handleFileSelection}
            className="bg-gray-700 text-gray-100"
          />
        </div>
        <Button onClick={handleAddDocument} className="bg-green-600 hover:bg-green-700 text-white">
          Add Document
        </Button>
      </div>
    </div>
  );
}
