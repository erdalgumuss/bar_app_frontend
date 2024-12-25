import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IViolation } from '@/types/violation';

interface ViolationResolutionProps {
  violations: IViolation[];
  onResolution: (updatedViolation: IViolation) => void;
}

export default function ViolationResolution({
  violations,
  onResolution,
}: ViolationResolutionProps) {
  const [selectedViolationId, setSelectedViolationId] = useState<string | null>(null);
  const [result, setResult] = useState('');
  const [finalReport, setFinalReport] = useState('');

  const selectedViolation = violations.find(
    (violation) => violation._id === selectedViolationId
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedViolation) {
      const updatedViolation: IViolation = {
        ...selectedViolation,
        result,
        summary: finalReport,
        status: 'tamamlandı',
      };
      onResolution(updatedViolation);
      resetForm();
    }
  };

  const resetForm = () => {
    setSelectedViolationId(null);
    setResult('');
    setFinalReport('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hak İhlali Sonuçlandırma</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select
            onValueChange={(value) => setSelectedViolationId(value)}
            value={selectedViolationId || ''}
          >
            <SelectTrigger>
              <SelectValue placeholder="Hak ihlali seçin" />
            </SelectTrigger>
            <SelectContent>
              {violations.map((violation) => (
                <SelectItem key={violation._id} value={violation._id!}>
                  {violation.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedViolation && (
            <>
              <Input
                placeholder="Sonuç"
                value={result}
                onChange={(e) => setResult(e.target.value)}
                required
              />

              <Textarea
                placeholder="Final Raporu"
                value={finalReport}
                onChange={(e) => setFinalReport(e.target.value)}
                rows={4}
                required
              />

              <Button type="submit">Sonuçlandır</Button>
            </>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
