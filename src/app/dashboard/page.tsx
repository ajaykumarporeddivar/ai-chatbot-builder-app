'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AiOutlinePlusCircle } from 'lucide-react';
import { AppHeader } from '@/components/layout';
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Avatar,
  Table,
  Button,
} from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import {
  STATS,
  MOCK_MAIN_ENTITY,
  RECENT_ACTIVITY,
  DEMO_USER,
  CHART_DATA,
  SPARKLINE_DATA,
  formatDate,
  formatCurrency,
} from '@/lib/data';

export default function DashboardPage() {
  const [selectedRow, setSelectedRow] = useState<MOCK_MAIN_ENTITY | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMsg, setToastMsg] = useState('');

  const handleRowClick = (row: MOCK_MAIN_ENTITY) => {
    setSelectedRow(row);
  };

  const handleToast = (message: string) => {
    setToastMsg(message);
    setTimeout(() => setToastMsg(''), 2000);
  };

  const statCards = STATS.map((stat, index) => (
    <StatCard
      key={index}
      title={stat.title}
      value={stat.value}
      sparkline={SPARKLINE_DATA[index]}
    />
  ));

  const chartData = {
    labels: CHART_DATA.labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: CHART_DATA.weekly,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex-1">
      <AppHeader
        title="Dashboard"
        subtitle={`Good morning, ${DEMO_USER.name}`}
        actions={
          <Button size="sm" onClick={() => handleToast('New entity created!')}>
            + New Entity
          </Button>
        }
      />

      <div className="grid grid-cols-4 gap-4 p-6">
        {statCards}
      </div>

      <div className="grid grid-cols-3 gap-4 p-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Domain Overview</CardTitle>
            <div className="text-zinc-400 text-sm">Last 12 weeks</div>
          </CardHeader>
          <CardContent>
            <BarChart data={chartData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {RECENT_ACTIVITY.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
                <Avatar src={activity.avatar} size={32} />
                <span className="text-zinc-600">{activity.text}</span>
                <span className="text-zinc-400 text-sm">{formatDate(activity.time)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle>All Entities</CardTitle>
          <div className="flex justify-between">
            <input
              type="search"
              placeholder="Search entities"
              className="block w-full py-2 pl-10 text-zinc-600 bg-zinc-100 rounded-lg"
            />
            <Button size="sm" onClick={() => handleToast('Entities exported!')}>
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table
            columns={[
              { label: 'Name', accessor: 'name' },
              { label: 'Description', accessor: 'description' },
              { label: 'Status', accessor: 'status' },
              { label: 'Created At', accessor: 'createdAt' },
            ]}
            data={MOCK_MAIN_ENTITY}
            onRowClick={handleRowClick}
          />
        </CardContent>
        <div className="flex justify-between p-6">
          <span className="text-zinc-600">
            Showing {MOCK_MAIN_ENTITY.length} of {MOCK_MAIN_ENTITY.length} results
          </span>
        </div>
      </Card>

      <div className="flex justify-between p-6">
        <Button size="sm" onClick={() => handleToast('New contract created!')}>
          New Contract
        </Button>
        <Button size="sm" onClick={() => handleToast('Invoice sent!')}>
          Send Invoice
        </Button>
        <Button size="sm" onClick={() => handleToast('Report generated!')}>
          Run Report
        </Button>
      </div>

      {toastMsg && (
        <div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm">
          {toastMsg}
        </div>
      )}
    </div>
  );
}