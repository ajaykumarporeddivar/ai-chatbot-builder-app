'use client';

import { useParams } from 'next/navigation';
import { MOCK_ANALYTICS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input, Modal, Avatar, StatCard } from '@/components/ui';
import { cn } from 'clsx';
import { BarChart } from 'lucide-react';

const params = useParams();
const slug = (params.feature as string) ?? '';

const AnalyticsPage = () => {
  const [filteredAnalytics, setFilteredAnalytics] = React.useState(MOCK_ANALYTICS);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [analyticsModalOpen, setAnalyticsModalOpen] = React.useState(false);
  const [selectedAnalytics, setSelectedAnalytics] = React.useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = MOCK_ANALYTICS.filter((analytic) => analytic.name.toLowerCase().includes(query));
    setFilteredAnalytics(filtered);
    setSearchQuery(query);
  };

  const handleAnalyticsClick = (analytic) => {
    setSelectedAnalytics(analytic);
    setAnalyticsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <Input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search analytics"
          className="w-full md:w-1/2"
        />
        <Button variant="primary" onClick={() => setAnalyticsModalOpen(true)}>
          New Analytics
        </Button>
      </CardHeader>
      <CardContent>
        <table className="w-full table-auto">
          <thead className="bg-zinc-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnalytics.map((analytic) => (
              <tr key={analytic.id} onClick={() => handleAnalyticsClick(analytic)} className="cursor-pointer">
                <td className="px-4 py-2">{analytic.name}</td>
                <td className="px-4 py-2">
                  <Badge variant={analytic.status === 'pending' ? 'warning' : analytic.status === 'approved' ? 'success' : 'error'}>
                    {analytic.status}
                  </Badge>
                </td>
                <td className="px-4 py-2">{analytic.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      {analyticsModalOpen && (
        <Modal onClose={() => setAnalyticsModalOpen(false)}>
          {selectedAnalytics && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedAnalytics.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Analytics ID: {selectedAnalytics.id}</p>
                <p>Status: {selectedAnalytics.status}</p>
                <p>Created At: {selectedAnalytics.createdAt}</p>
              </CardContent>
            </Card>
          )}
        </Modal>
      )}
    </div>
  );
};

export default AnalyticsPage;