'use client';

import { useState } from 'react';
import { DEMO_USER } from '@/lib/data';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';
import { cn } from '@/lib/utils';

const tabs = ['Profile', 'Notifications', 'Appearance'];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [theme, setTheme] = useState('Light');
  const [language, setLanguage] = useState('English');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="bg-zinc-50 p-4">
      <AppHeader />
      <Card className="mt-4">
        <div className="flex flex-wrap -mx-2">
          {tabs.map((tab) => (
            <Button
              key={tab}
              className={cn(
                'w-full md:w-auto px-4 py-2 mb-2 mx-2',
                activeTab === tab ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600',
              )}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
        {activeTab === 'Profile' && (
          <div className="mt-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2"
            />
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2"
            />
            <Input
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-2"
            />
            <Button
              className="bg-zinc-900 text-white hover:bg-zinc-700 w-full mt-4"
              onClick={handleSave}
            >
              Save
            </Button>
            {saved && (
              <Badge className="bg-emerald-50 border-emerald-200 text-emerald-600 mt-4">
                Saved!
              </Badge>
            )}
          </div>
        )}
        {activeTab === 'Notifications' && (
          <div className="mt-4">
            <div
              className={cn(
                'flex items-center mb-2',
                emailNotifications ? 'bg-zinc-100 text-zinc-600' : 'bg-zinc-50 text-zinc-400',
              )}
              onClick={() => setEmailNotifications(!emailNotifications)}
            >
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="mr-2"
              />
              Email notifications
            </div>
            <div
              className={cn(
                'flex items-center mb-2',
                pushNotifications ? 'bg-zinc-100 text-zinc-600' : 'bg-zinc-50 text-zinc-400',
              )}
              onClick={() => setPushNotifications(!pushNotifications)}
            >
              <input
                type="checkbox"
                checked={pushNotifications}
                onChange={() => setPushNotifications(!pushNotifications)}
                className="mr-2"
              />
              Push notifications
            </div>
            <div
              className={cn(
                'flex items-center mb-2',
                weeklyDigest ? 'bg-zinc-100 text-zinc-600' : 'bg-zinc-50 text-zinc-400',
              )}
              onClick={() => setWeeklyDigest(!weeklyDigest)}
            >
              <input
                type="checkbox"
                checked={weeklyDigest}
                onChange={() => setWeeklyDigest(!weeklyDigest)}
                className="mr-2"
              />
              Weekly digest
            </div>
          </div>
        )}
        {activeTab === 'Appearance' && (
          <div className="mt-4">
            <div className="flex flex-wrap -mx-2">
              <Button
                className={cn(
                  'w-full md:w-auto px-4 py-2 mb-2 mx-2',
                  theme === 'Light' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600',
                )}
                onClick={() => setTheme('Light')}
              >
                Light
              </Button>
              <Button
                className={cn(
                  'w-full md:w-auto px-4 py-2 mb-2 mx-2',
                  theme === 'Dark' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600',
                )}
                onClick={() => setTheme('Dark')}
              >
                Dark
              </Button>
              <Button
                className={cn(
                  'w-full md:w-auto px-4 py-2 mb-2 mx-2',
                  theme === 'System' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600',
                )}
                onClick={() => setTheme('System')}
              >
                System
              </Button>
            </div>
            <div className="flex flex-wrap -mx-2 mt-4">
              <Button
                className={cn(
                  'w-full md:w-auto px-4 py-2 mb-2 mx-2',
                  language === 'English' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600',
                )}
                onClick={() => setLanguage('English')}
              >
                English
              </Button>
              <Button
                className={cn(
                  'w-full md:w-auto px-4 py-2 mb-2 mx-2',
                  language === 'Spanish' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600',
                )}
                onClick={() => setLanguage('Spanish')}
              >
                Spanish
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}