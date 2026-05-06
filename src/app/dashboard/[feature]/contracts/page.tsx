'use client';

import { useParams } from 'next/navigation';
import { MOCK_CONTRACTS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input, Modal, Avatar, StatCard } from '@/components/ui';
import { cn } from 'clsx';
import { ChatMessage } from 'lucide-react';

const params = useParams();
const slug = (params.feature as string) ?? '';

const ContractsPage = () => {
  const [filteredContracts, setFilteredContracts] = React.useState(MOCK_CONTRACTS);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [contractModalOpen, setContractModalOpen] = React.useState(false);
  const [selectedContract, setSelectedContract] = React.useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = MOCK_CONTRACTS.filter((contract) => contract.name.toLowerCase().includes(query));
    setFilteredContracts(filtered);
    setSearchQuery(query);
  };

  const handleContractClick = (contract) => {
    setSelectedContract(contract);
    setContractModalOpen(true);
  };

  return (
    <div className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Contracts</CardTitle>
        <Input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search contracts"
          className="w-full md:w-1/2"
        />
        <Button variant="primary" onClick={() => setContractModalOpen(true)}>
          New Contract
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
            {filteredContracts.map((contract) => (
              <tr key={contract.id} onClick={() => handleContractClick(contract)} className="cursor-pointer">
                <td className="px-4 py-2">{contract.name}</td>
                <td className="px-4 py-2">
                  <Badge variant={contract.status === 'pending' ? 'warning' : contract.status === 'approved' ? 'success' : 'error'}>
                    {contract.status}
                  </Badge>
                </td>
                <td className="px-4 py-2">{contract.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      {contractModalOpen && (
        <Modal onClose={() => setContractModalOpen(false)}>
          {selectedContract && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedContract.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Contract ID: {selectedContract.id}</p>
                <p>Status: {selectedContract.status}</p>
                <p>Created At: {selectedContract.createdAt}</p>
              </CardContent>
            </Card>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ContractsPage;