import { Inter } from 'next/font/google';
import { DEMO_USER } from '../lib/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: ' Chatbot Builder — Build and deploy AI-powered chatbots with ease',
 description: 'The AI Chatbot Builder is a micro-SaaS product designed Businesses, marketing agencies, and e-commerce companies to create and deploy custom-powered chatbots without requiring extensive technical expertise.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-50 antialiased">
        <div className="fixed top-0 z-50 bg-zinc-900 text-zinc-100 text-xs px-4 py-2 flex justify-between items-center">
          <span>⚡ Demo Mode — AI Chatbot Builder · Built with NEXUS OS</span>
          <a href="/dashboard" className="text-zinc-100 hover:text-white transition">
            Open Dashboard →
          </a>
        </div>
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}