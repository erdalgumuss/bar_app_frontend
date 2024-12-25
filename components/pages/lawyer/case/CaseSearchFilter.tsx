import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Case } from "@/types/case";

interface CaseSearchFilterProps {
  onFilter: (filteredCases: Case[]) => void;
  cases: Case[];
}

export function CaseSearchFilter({ onFilter, cases }: CaseSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const handleFilter = () => {
    const filteredCases = cases.filter((caseItem) => 
      (caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       caseItem.caseNumber.includes(searchTerm)) &&
      (category === "all" || caseItem.category === category) &&
      (status === "all" || caseItem.status === status)
    );
    onFilter(filteredCases);
  };

  return (
    <div className="space-y-4 bg-gray-800 p-4 rounded-lg">
      <Input
        placeholder="Search by case name or number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-700 text-gray-100 border-gray-600"
      />
      <div className="flex space-x-4">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="criminal">Criminal</SelectItem>
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={handleFilter}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Filter
      </Button>
    </div>
  );
}
