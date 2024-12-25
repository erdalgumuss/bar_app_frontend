import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { IViolation } from '@/types/violation';

const categories = [
  'Aile ve Özel Yaşam Hakkı',
  'Kadına Karşı Şiddet',
  'Eğitim Hakkı',
  'İfade Özgürlüğü',
  'Adil Yargılanma Hakkı',
  'Diğer',
];

interface ViolationCategoryTrackingProps {
  violations: IViolation[];
}

export default function ViolationCategoryTracking({
  violations,
}: ViolationCategoryTrackingProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredViolations =
    selectedCategory === 'all'
      ? violations
      : violations.filter((violation) => violation.category === selectedCategory);

  const categoryData = categories.map((category) => ({
    name: category,
    count: violations.filter((violation) => violation.category === category).length,
  }));

  return (
    <div className="space-y-4">
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-[200px] bg-gray-800 text-gray-100 border-gray-700">
          <SelectValue placeholder="Kategori seçin" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
          <SelectItem value="all">Tüm Kategoriler</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Card>
        <CardHeader>
          <CardTitle>Kategori Bazında Hak İhlalleri</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredViolations.map((violation) => (
          <Card key={violation._id}>
            <CardHeader>
              <CardTitle>{violation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Kategori:</strong> {violation.category}
              </p>
              <p>
                <strong>Durum:</strong> {violation.status === 'işlemde' ? 'İşlemde' : 'Tamamlandı'}
              </p>
              <p>
                <strong>Başvuru Tarihi:</strong>{' '}
                {new Date(violation.applicationDate).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
