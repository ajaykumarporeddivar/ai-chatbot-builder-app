'use client';

import { Link } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input, Modal, Avatar, StatCard } from '@/components/ui';
import { cn } from 'clsx';
import { ChatMessage } from 'lucide-react';

const DashboardIndex = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link href="/dashboard/contracts" className="cursor-pointer">
        <Card>
          <CardHeader>
            <CardTitle>Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your contracts</p>
            <Button variant="primary">Open →</Button>
          </CardContent>
        </Card>
      </Link>
      <Link href="/dashboard/integrations" className="cursor-pointer">
        <Card>
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your integrations</p>
            <Button variant="primary">Open →</Button>
          </CardContent>
        </Card>
      </Link>
      <Link href="/dashboard/analytics" className="cursor-pointer">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View your analytics</p>
            <Button variant="primary">Open →</Button>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default DashboardIndex;