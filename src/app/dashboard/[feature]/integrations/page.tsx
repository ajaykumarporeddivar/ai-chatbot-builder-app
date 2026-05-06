'use client';

import { useParams } from 'next/navigation';
import { MOCK_INTEGRATIONS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input, Modal, Avatar, StatCard } from '@/components/ui';
import { cn } from 'clsx';
import { Plug } from 'lucide-react';

const params = useParams();
const slug = (params.feature as string) ?? '';

const IntegrationsPage = () => {
  const [filteredIntegrations, setFilteredIntegrations] = React.useState(MOCK_INTEGRATIONS);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [integrationModalOpen, setIntegrationModalOpen] = React.useState(false);
  const [selectedIntegration, setSelectedIntegration] = React.useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = MOCK_INTEGRATIONS.filter((integration) => integration.name.toLowerCase().includes(query));
    setFilteredIntegrations(filtered);
    setSearchQuery(query);
  };

  const handleIntegrationClick = (integration) => {
    setSelectedIntegration(integration);
    setIntegrationModalOpen(true);
  };

  return (
    <div className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <Input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search integrations"
          className="w-full md:w-1/2"
        />
        <Button variant="primary" onClick={() => setIntegrationModalOpen(true)}>
          New Integration
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
            {filteredIntegrations.map((integration) => (
              <tr key={integration.id} onClick={() => handleIntegrationClick(integration)} className="cursor-pointer">
                <td className="px-4 py-2">{integration.name}</td>
                <td className="px-4 py-2">
                  <Badge variant={integration.status === 'pending' ? 'warning' : integration.status === 'approved' ? 'success' : 'error'}>
                    {integration.status}
                  </Badge>
                </td>
                <td className="px-4 py-2">{integration.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      {integrationModalOpen && (
        <Modal onClose={() => setIntegrationModalOpen(false)}>
          {selectedIntegration && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedIntegration.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Integration ID: {selectedIntegration.id}</p>
                <p>Status: {selectedIntegration.status}</p>
                <p>Created At: {selectedIntegration.createdAt}</p>
              </CardContent>
            </Card>
          )}
        </Modal>
      )}
    </div>
  );
};

export default IntegrationsPage;