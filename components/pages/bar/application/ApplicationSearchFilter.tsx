'use client';

import { useState, useEffect, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import debounce from 'lodash/debounce';
import { IApplication } from '@/types/application';

interface ApplicationSearchFilterProps {
  applications: IApplication[];
  onFilter: (filteredApplications: IApplication[]) => void;
}

export default function ApplicationSearchFilter({ applications, onFilter }: ApplicationSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const debouncedFilter = useMemo(
    () =>
      debounce((filteredApplications: IApplication[]) => {
        onFilter(filteredApplications);
      }, 300),
    [onFilter]
  );

  useEffect(() => {
    const filteredApplications = applications.filter((app) => {
      const matchesSearchTerm =
        app.applicantName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.eventTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.eventCategory?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = status === 'all' || app.status === status;
      const matchesStartDate = !startDate || new Date(app.date) >= new Date(startDate);
      const matchesEndDate = !endDate || new Date(app.date) <= new Date(endDate);

      return matchesSearchTerm && matchesStatus && matchesStartDate && matchesEndDate;
    });

    debouncedFilter(filteredApplications);
  }, [applications, searchTerm, status, startDate, endDate, debouncedFilter]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="flex-grow">
          <Label htmlFor="search" className="text-gray-100">
            Arama
          </Label>
          <Input
            id="search"
            placeholder="Başvuru No, Başvuran Kişi veya Olay Başlığı"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 text-gray-100 border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="status" className="text-gray-100">
            Durum
          </Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status" className="w-[200px] bg-gray-800 text-gray-100 border-gray-700">
              <SelectValue placeholder="Durum seçin" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
              <SelectItem value="all">Tümü</SelectItem>
              <SelectItem value="işlemde">İşlemde</SelectItem>
              <SelectItem value="beklemede">Beklemede</SelectItem>
              <SelectItem value="tamamlandı">Tamamlandı</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate" className="text-gray-100">
            Başlangıç Tarihi
          </Label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-gray-800 text-gray-100 border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate" className="text-gray-100">
            Bitiş Tarihi
          </Label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-gray-800 text-gray-100 border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
