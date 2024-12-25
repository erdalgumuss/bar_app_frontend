'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Case } from '@/types/case';

interface CaseSearchFilterProps {
  cases: Case[]; // List of all cases
  onFilter: (filteredCases: Case[]) => void; // Callback for filtering cases
}

/**
 * CaseSearchFilter Component
 * Provides a search and filter interface for managing cases.
 */
export default function CaseSearchFilter({ cases, onFilter }: CaseSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState(''); // Search term for case name/number
  const [categoryFilter, setCategoryFilter] = useState('all'); // Filter for case category
  const [statusFilter, setStatusFilter] = useState('all'); // Filter for case status

  // Handle filtering cases based on search and selected filters
  const handleFilter = () => {
    const filteredCases = cases.filter(
      (caseItem) =>
        (caseItem.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          caseItem.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (categoryFilter === 'all' || caseItem.category === categoryFilter) &&
        (statusFilter === 'all' || caseItem.status === statusFilter)
    );
    onFilter(filteredCases);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        {/* Search Input */}
        <Input
          placeholder="Search by case number or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-gray-800 text-gray-100 border-gray-700"
        />

        {/* Category Filter */}
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[200px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="criminal">Criminal</SelectItem>
            <SelectItem value="civil">Civil</SelectItem>
            <SelectItem value="administrative">Administrative</SelectItem>
          </SelectContent>
        </Select>

        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[200px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="postponed">Postponed</SelectItem>
          </SelectContent>
        </Select>

        {/* Filter Button */}
        <Button onClick={handleFilter} className="bg-blue-600 hover:bg-blue-700 text-white">
          Filter
        </Button>
      </div>
    </div>
  );
}
