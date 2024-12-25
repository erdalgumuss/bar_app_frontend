import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Case } from '@/types/case';

interface CaseStatisticsProps {
  caseData: Case; // Dava bilgisi
}

/**
 * CaseStatistics Component
 * Displays statistical insights related to the case, including similar case results and duration analysis.
 */
export default function CaseStatistics({ caseData }: CaseStatisticsProps) {
  // Mock data for similar case outcomes
  const similarCaseResults = [
    { name: 'Accepted', value: 30 },
    { name: 'Rejected', value: 20 },
    { name: 'Partially Accepted', value: 15 },
    { name: 'Settled', value: 10 },
  ];

  const averageDecisionTime = 180; // Average decision time in days

  // Calculates the estimated remaining time for the case decision
  const calculateRemainingTime = () => {
    const daysSinceStart = Math.floor(
      (new Date().getTime() - new Date(caseData.startDate).getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.max(0, averageDecisionTime - daysSinceStart);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Case Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Similar Cases Results */}
        <Card>
          <CardHeader>
            <CardTitle>Similar Case Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={similarCaseResults}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Case Duration Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Case Duration Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Average Decision Time: {averageDecisionTime} days</p>
            <p>Estimated Remaining Time: {calculateRemainingTime()} days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
