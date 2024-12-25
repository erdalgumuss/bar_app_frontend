import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CaseProcess } from "./caseDetails/CaseProcess";
import { DocumentManagement } from "./caseDetails/DocumentManagement";
import { HearingSchedule } from "./caseDetails/HearingSchedule";
import { CommunicationArea } from "./caseDetails/CommunicationArea";
import { Case } from "@/types/case";

interface CaseDetailsProps {
  caseData: Case;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseDetails({ caseData, isOpen, onClose }: CaseDetailsProps) {
  const [activeTab, setActiveTab] = useState("summary");

  if (!caseData) return null;

  // `process` verisini `history` üzerinden oluştur
  const process = caseData.history.map((historyItem) => ({
    title: historyItem.action,
    content: historyItem.description,
    date: historyItem.date,
  }));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-800 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {caseData.title || "Dava Detayı"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 h-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="summary">Özet</TabsTrigger>
              <TabsTrigger value="process">Süreç</TabsTrigger>
              <TabsTrigger value="documents">Belgeler</TabsTrigger>
              <TabsTrigger value="hearings">Duruşmalar</TabsTrigger>
              <TabsTrigger value="communication">İletişim</TabsTrigger>
            </TabsList>
            <TabsContent value="summary">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Dava Bilgileri</h3>
                  <div>
                    <strong>Dava No:</strong> {caseData.caseNumber || "Belirtilmemiş"}
                  </div>
                  <div>
                    <strong>Durum:</strong>{" "}
                    <Badge variant="outline">{caseData.status || "Belirtilmemiş"}</Badge>
                  </div>
                  <div>
                    <strong>Kategori:</strong> {caseData.category || "Belirtilmemiş"}
                  </div>
                  <div>
                    <strong>Sonuç:</strong> {caseData.result || "Belirtilmemiş"}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Başvuran Bilgileri</h3>
                  <div>
                    <strong>Ad Soyad:</strong> {caseData.applicant?.name || "Belirtilmemiş"}
                  </div>
                  <div>
                    <strong>İletişim:</strong>{" "}
                    {caseData.applicant?.email || "Belirtilmemiş"} /{" "}
                    {caseData.applicant?.phone || "Belirtilmemiş"}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dava Özeti</h3>
                  <div>{caseData.summary || "Dava özeti bulunmamaktadır."}</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="process">
              <CaseProcess process={process} />
            </TabsContent>
            <TabsContent value="documents">
              <DocumentManagement caseData={caseData} />
            </TabsContent>
            <TabsContent value="hearings">
              <HearingSchedule caseData={caseData} />
            </TabsContent>
            <TabsContent value="communication">
              <CommunicationArea caseData={caseData} />
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
