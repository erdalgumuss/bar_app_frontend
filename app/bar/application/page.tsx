'use client';

import { useState, useEffect } from 'react'; // useState ve useEffect import edildi
import BaroDashboard from '@/components/pages/bar/BaroDashboard';
import ApplicationSearchFilter from '@/components/pages/bar/application/ApplicationSearchFilter';
import ApplicationList from '@/components/pages/bar/application/ApplicationList';
import ApplicationStatistics from '@/components/pages/bar/application/ApplicationStatistics';
import ApplicationForm from '@/components/pages/bar/application/ApplicationForm';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import useApplicationStore from '@/store/useApplicationStore'; // Dosya yolunu kontrol edin

interface Application {
  _id: string;
  applicantName: string;
  contactDetails: {
    email: string;
    phone: string;
    address: string;
  };
  eventTitle: string;
  eventCategory: string;
  status: string;
  date: string;
  assignedLawyer?: string | null;
}


export default function ApplicationManagementPage() {
  const {
    applications,
    fetchApplications,
    addApplication,
    updateApplication,
  } = useApplicationStore();

  const { toast } = useToast();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('list');
  const [showNewApplicationForm, setShowNewApplicationForm] = useState(false);
  const [editingApplication] = useState<Application | null>(null);
// Eklenen State

  useEffect(() => {
    fetchApplications().catch(() => {
      toast({
        title: 'Hata',
        description: `Başvurular yüklenirken bir hata oluştu`,
        variant: 'destructive',
      });
    });
  }, [fetchApplications, toast]);

  const handleNewApplication = async (newApplication: Application) => {
    try {
      await addApplication(newApplication);
      setShowNewApplicationForm(false);
      toast({
        title: 'Başvuru Eklendi',
        description: 'Yeni başvuru başarıyla eklendi.',
      });
    } catch  {
      toast({
        title: 'Hata',
        description: `Başvuru eklenirken bir hata oluştu`,
        variant: 'destructive',
      });
    }
  };

  const handleUpdateApplication = async (updatedApplication: Application) => {
    try {
      await updateApplication(updatedApplication._id, updatedApplication);
      toast({
        title: 'Başvuru Güncellendi',
        description: 'Başvuru bilgileri başarıyla güncellendi.',
      });
    } catch  {
      toast({
        title: 'Hata',
        description: `Başvuru güncellenirken bir hata oluştu`,
        variant: 'destructive',
      });
    }
  };

  const handleDavaSelect = (application: Application) => {
    router.push(`/bar/application/${application._id}`);
  };

  return (
    <BaroDashboard>
      <div className="space-y-6 bg-gray-900 text-gray-100 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Başvuru Yönetimi</h1>
          <Button
            onClick={() => setShowNewApplicationForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Yeni Başvuru Ekle
          </Button>
        </div>

        <ApplicationSearchFilter
          applications={applications}
          onFilter={(filtered) => console.log(filtered)} // Filter işlemi uygulanabilir
        />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="list">Başvuru Listesi</TabsTrigger>
            <TabsTrigger value="statistics">İstatistikler</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <ApplicationList
              applications={applications}
              onUpdateApplication={handleUpdateApplication}
              onDavaSelect={handleDavaSelect}
            />
          </TabsContent>
          <TabsContent value="statistics">
            <ApplicationStatistics applications={applications} />
          </TabsContent>
        </Tabs>

        {showNewApplicationForm && (
          <ApplicationForm
            application={editingApplication} // Null geçilebilir
            onClose={() => setShowNewApplicationForm(false)}
            onSubmit={handleNewApplication}
          />
        )}
      </div>
    </BaroDashboard>
  );
}