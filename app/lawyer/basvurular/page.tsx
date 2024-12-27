'use client';

import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import ApplicationList from '@/components/pages/lawyer/application/ApplicationList';
import AddCaseForm from '@/components/pages/bar/case/AddCaseForm';
import LawyerDashboard from '@/components/pages/lawyer/LawyerDashboard';
import { useRouter } from 'next/navigation';
import useApplicationStore from '@/stores/useApplicationStore';
import { IApplication } from '@/types/application';
import { Case } from '@/types/case';

export default function ApplicationManagementPage() {
  const [selectedApplication, setSelectedApplication] = useState<IApplication | null>(null);
  const [showAddCaseForm, setShowAddCaseForm] = useState(false);
  const router = useRouter();

  const { applications, fetchApplications, updateApplication } = useApplicationStore();

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleApproveApplication = async (applicationId: string) => {
    try {
      await updateApplication(applicationId, { status: 'işlemde' });
      toast({
        title: 'Başvuru Onaylandı',
        description: 'Başvuru durumu başarıyla güncellendi.',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Hata',
        description: 'Başvuru onaylanırken bir hata oluştu.',
      });
    }
  };

  const handleOpenCase = (applicationId: string) => {
    const application = applications.find((app) => app._id === applicationId);
    if (application) {
      setSelectedApplication(application);
      setShowAddCaseForm(true);
    }
  };

  const handleSelectApplication = (application: IApplication) => {
    router.push(`/lawyer/applications/${application._id}`);
  };

  const handleCaseCreated = (newCase: Case) => {
    if (selectedApplication) {
      const updatedApplication: IApplication = {
        ...selectedApplication,
        status: 'beklemede',
        history: [
          ...selectedApplication.history,
          {
            date: new Date().toISOString(),
            action: 'Case Opened',
            description: `Case Number: ${newCase.caseNumber}`,
          },
        ],
      };
      updateApplication(selectedApplication._id, updatedApplication);
      setSelectedApplication(null);
      setShowAddCaseForm(false);
      toast({
        title: 'Dava Oluşturuldu',
        description: `Başvuru durumu güncellendi. (${newCase.caseNumber})`,
      });
    }
  };

  return (
    <LawyerDashboard>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Başvuru Yönetimi</h1>
        <ApplicationList
          applications={applications}
          onSelectApplication={handleSelectApplication}
          onApproveApplication={handleApproveApplication}
          onOpenCase={handleOpenCase}
        />

        {showAddCaseForm && selectedApplication && (
          <AddCaseForm
            onClose={() => setShowAddCaseForm(false)}
            onSubmit={handleCaseCreated}
            application={selectedApplication}
          />
        )}
      </div>
    </LawyerDashboard>
  );
}
