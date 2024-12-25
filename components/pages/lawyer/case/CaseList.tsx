import { CaseCard } from "./CaseCard";
import { Case } from "@/types/case";

interface CaseListProps {
  cases: Case[]; // Tip tanımı düzenlendi
  onViewDetails: (id: string) => void; // Fonksiyon adı güncellendi
}

export function CaseList({ cases, onViewDetails }: CaseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cases.map((caseItem) => (
        <CaseCard
          key={caseItem.id}
          {...caseItem}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
