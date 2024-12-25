'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { IViolation } from '@/types/violation';

interface ViolationSearchFilterProps {
  violations: IViolation[];
  onFilter: (filteredViolations: IViolation[]) => void;
}

const categories = [
  { label: 'All Categories', value: 'all' },
  { label: 'Family Rights', value: 'familyRights' },
  { label: 'Violence Against Women', value: 'violenceAgainstWomen' },
  { label: 'Child Rights', value: 'childRights' },
  { label: 'Freedom of Expression', value: 'freedomOfExpression' },
];

const sources = [
  { label: 'All Sources', value: 'all' },
  { label: 'Media', value: 'media' },
  { label: 'NGO', value: 'ngo' },
  { label: 'Individual Application', value: 'individualApplication' },
];

export default function ViolationSearchFilter({
  violations,
  onFilter,
}: ViolationSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const filterViolations = () => {
    const filteredViolations = violations.filter((violation) => {
      const matchesSearchTerm =
        searchTerm === '' ||
        violation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        violation.applicant.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === 'all' || violation.category === categoryFilter;

      const matchesSource =
        sourceFilter === 'all' || violation.source.type === sourceFilter;

      const matchesStartDate =
        !startDate || new Date(violation.applicationDate) >= new Date(startDate);

      const matchesEndDate =
        !endDate || new Date(violation.applicationDate) <= new Date(endDate);

      return (
        matchesSearchTerm &&
        matchesCategory &&
        matchesSource &&
        matchesStartDate &&
        matchesEndDate
      );
    });

    onFilter(filteredViolations);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Input
          placeholder="Search by case title or applicant name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-gray-800 text-gray-100 border-gray-700"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[200px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            {categories.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="w-[200px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            {sources.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex space-x-4 items-center">
        <Input
          type="date"
          value={startDate || ''}
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-gray-800 text-gray-100 border-gray-700"
        />
        <span className="text-gray-100">-</span>
        <Input
          type="date"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="bg-gray-800 text-gray-100 border-gray-700"
        />
        <Button
          onClick={filterViolations}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Filter
        </Button>
      </div>
    </div>
  );
}
