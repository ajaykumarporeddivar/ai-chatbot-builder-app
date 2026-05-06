'use client';

import { clsx } from 'x';
import { } from '../../app/layout';
import { DEM_USER, FORGE_FEATURE_CARDS } from '@/lib/data';
import { AppSidebar, AppHeader,Banner } from '@//layout';
import { AiOutlinePlusCircle } from 'lide-react';

const navItems = FORGE_FEATURE_CARDS((feature) => ({
  icon: <AiOutlinePlusCircle size={16} />,
  label: feature.name,
  href: `/dashboard/${feature.slug}`,
}));

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName="AI Chatbot Builder" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}