import { User, Chatbot, Intent, Entity, Conversation, Message, StatCard, DemoUser } from './types';

export const DEMO_USER: DemoUser = {
  id: 'demo-user-1',
  name: 'Sarah Chen',
  email: 'sarah@example.com',
  role: 'e-commerce manager',
  plan: 'pro',
  avatar: 'https://example.com/avatar.jpg',
  joinedAt: '2024-02-15T14:30:00.000Z',
}

export const MOCK_USERS: User[] = [
  { id: 'user-1', name: 'Emily Chen', email: 'emily@example.com', role: 'e-commerce manager', plan: 'pro', avatar: 'https://example.com/avatar1.jpg', joinedAt: '2024-02-15T14:30:00.000Z' },
  { id: 'user-2', name: 'David Lee', email: 'david@example.com', role: 'marketing director', plan: 'pro', avatar: 'https://example.com/avatar2.jpg', joinedAt: '2024-03-10T10:00:00.000Z' },
  { id: 'user-3', name: 'Jessica Brown', email: 'jessica@example.com', role: 'customer support', plan: 'basic', avatar: 'https://example.com/avatar3.jpg', joinedAt: '2024-01-20T12:00:00.000Z' },
  { id: 'user-4', name: 'Kevin White', email: 'kevin@example.com', role: 'sales manager', plan: 'pro', avatar: 'https://example.com/avatar4.jpg', joinedAt: '2024-04-01T15:00:00.000Z' },
  { id: 'user-5', name: 'Emily Davis', email: 'emilyd@example.com', role: 'marketing manager', plan: 'basic', avatar: 'https://example.com/avatar5.jpg', joinedAt: '2024-05-01T10:00:00.000Z' },
  { id: 'user-6', name: 'Sarah Taylor', email: 'sarah@example.com', role: 'e-commerce manager', plan: 'pro', avatar: 'https://example.com/avatar6.jpg', joinedAt: '2024-06-01T14:30:00.000Z' },
  { id: 'user-7', name: 'Michael Brown', email: 'michael@example.com', role: 'customer support', plan: 'basic', avatar: 'https://example.com/avatar7.jpg', joinedAt: '2024-07-01T10:00:00.000Z' },
  { id: 'user-8', name: 'Olivia Lee', email: 'olivia@example.com', role: 'marketing director', plan: 'pro', avatar: 'https://example.com/avatar8.jpg', joinedAt: '2024-08-01T15:00:00.000Z' },
  { id: 'user-9', name: 'William White', email: 'william@example.com', role: 'sales manager', plan: 'pro', avatar: 'https://example.com/avatar9.jpg', joinedAt: '2024-09-01T10:00:00.000Z' },
  { id: 'user-10', name: 'Ava Martin', email: 'ava@example.com', role: 'e-commerce manager', plan: 'basic', avatar: 'https://example.com/avatar10.jpg', joinedAt: '2024-10-01T14:30:00.000Z' },
  { id: 'user-11', name: 'Ethan Hall', email: 'ethan@example.com', role: 'customer support', plan: 'basic', avatar: 'https://example.com/avatar11.jpg', joinedAt: '2024-11-01T10:00:00.000Z' },
  { id: 'user-12', name: 'Sophia Patel', email: 'sophia@example.com', role: 'marketing manager', plan: 'pro', avatar: 'https://example.com/avatar12.jpg', joinedAt: '2024-12-01T15:00:00.000Z' },
  { id: 'user-13', name: 'Mason Kim', email: 'mason@example.com', role: 'sales manager', plan: 'pro', avatar: 'https://example.com/avatar13.jpg', joinedAt: '2025-01-01T10:00:00.000Z' },
  { id: 'user-14', name: 'Isabella Brooks', email: 'isabella@example.com', role: 'e-commerce manager', plan: 'basic', avatar: 'https://example.com/avatar14.jpg', joinedAt: '2025-02-01T14:30:00.000Z' },
  { id: 'user-15', name: 'Logan Russell', email: 'logan@example.com', role: 'customer support', plan: 'basic', avatar: 'https://example.com/avatar15.jpg', joinedAt: '2025-03-01T10:00:00.000Z' },
]

export const MOCK_CHATBOTS: Chatbot[] = [
  { id: 'chatbot-1', name: 'Customer Support Bot', description: 'A chatbot for customer support', status: 'active', createdAt: '2024-02-15T14:30:00.000Z', updatedAt: '2024-02-15T14:30:00.000Z' },
  { id: 'chatbot-2', name: 'Sales Bot', description: 'A chatbot for sales', status: 'active', createdAt: '2024-03-10T10:00:00.000Z', updatedAt: '2024-03-10T10:00:00.000Z' },
  { id: 'chatbot-3', name: 'Marketing Bot', description: 'A chatbot for marketing', status: 'inactive', createdAt: '2024-01-20T12:00:00.000Z', updatedAt: '2024-01-20T12:00:00.000Z' },
  { id: 'chatbot-4', name: 'E-commerce Bot', description: 'A chatbot for e-commerce', status: 'active', createdAt: '2024-04-01T15:00:00.000Z', updatedAt: '2024-04-01T15:00:00.000Z' },
  { id: 'chatbot-5', name: 'Customer Service Bot', description: 'A chatbot for customer service', status: 'active', createdAt: '2024-05-01T10:00:00.000Z', updatedAt: '2024-05-01T10:00:00.000Z' },
  { id: 'chatbot-6', name: 'Technical Support Bot', description: 'A chatbot for technical support', status: 'inactive', createdAt: '2024-06-01T14:30:00.000Z', updatedAt: '2024-06-01T14:30:00.000Z' },
  { id: 'chatbot-7', name: 'Order Bot', description: 'A chatbot for orders', status: 'active', createdAt: '2024-07-01T10:00:00.000Z', updatedAt: '2024-07-01T10:00:00.000Z' },
  { id: 'chatbot-8', name: 'Return Bot', description: 'A chatbot for returns', status: 'active', createdAt: '2024-08-01T15:00:00.000Z', updatedAt: '2024-08-01T15:00:00.000Z' },
  { id: 'chatbot-9', name: 'Feedback Bot', description: 'A chatbot for feedback', status: 'inactive', createdAt: '2024-09-01T10:00:00.000Z', updatedAt: '2024-09-01T10:00:00.000Z' },
  { id: 'chatbot-10', name: 'Survey Bot', description: 'A chatbot for surveys', status: 'active', createdAt: '2024-10-01T14:30:00.000Z', updatedAt: '2024-10-01T14:30:00.000Z' },
  { id: 'chatbot-11', name: 'Quiz Bot', description: 'A chatbot for quizzes', status: 'active', createdAt: '2024-11-01T10:00:00.000Z', updatedAt: '2024-11-01T10:00:00.000Z' },
  { id: 'chatbot-12', name: 'Game Bot', description: 'A chatbot for games', status: 'inactive', createdAt: '2024-12-01T15:00:00.000Z', updatedAt: '2024-12-01T15:00:00.000Z' },
  { id: 'chatbot-13', name: 'News Bot', description: 'A chatbot for news', status: 'active', createdAt: '2025-01-01T10:00:00.000Z', updatedAt: '2025-01-01T10:00:00.000Z' },
  { id: 'chatbot-14', name: 'Weather Bot', description: 'A chatbot for weather', status: 'active', createdAt: '2025-02-01T14:30:00.000Z', updatedAt: '2025-02-01T14:30:00.000Z' },
  { id: 'chatbot-15', name: 'Traffic Bot', description: 'A chatbot for traffic', status: 'inactive', createdAt: '2025-03-01T10:00:00.000Z', updatedAt: '2025-03-01T10:00:00.000Z' },
]

export const STATS = {
  totalRevenue: '$284,520',
  revenueGrowth: '+18.4%',
  activeUsers: 1847,
  userGrowth: '+12.1%',
  conversations: 10000,
  conversationRate: '+25%',
}

export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94, 71, 103, 89, 112],
  labels: ['Jan W1', 'Jan W2', 'Jan W3', 'Jan W4', 'Feb W1', 'Feb W2', 'Feb W3', 'Feb W4', 'Mar W1', 'Mar W2', 'Mar W3', 'Mar W4'],
  revenue: [18200, 22400, 19800, 31200, 24500, 27800, 21000, 32000, 27000, 30200, 24000, 35000],
}

export const SPARKLINE_DATA = {
  revenue: [78, 82, 79, 91, 88, 94, 103],
  users: [142, 158, 151, 173, 188, 165, 179],
  conversations: [100, 120, 110, 140, 130, 160, 170],
}

export const RECENT_ACTIVITY = [
  { id: '1', action: 'Created new chatbot', user: 'Sarah Chen', avatar: 'SC', time: '2 minutes ago', type: 'create' as const },
  { id: '2', action: 'Updated chatbot', user: 'Emily Chen', avatar: 'EC', time: '5 minutes ago', type: 'update' as const },
  { id: '3', action: 'Deleted chatbot', user: 'David Lee', avatar: 'DL', time: '10 minutes ago', type: 'delete' as const },
  { id: '4', action: 'Created new intent', user: 'Jessica Brown', avatar: 'JB', time: '15 minutes ago', type: 'create' as const },
  { id: '5', action: 'Updated intent', user: 'Kevin White', avatar: 'KW', time: '20 minutes ago', type: 'update' as const },
  { id: '6', action: 'Deleted intent', user: 'Emily Davis', avatar: 'ED', time: '25 minutes ago', type: 'delete' as const },
  { id: '7', action: 'Created new entity', user: 'Sarah Taylor', avatar: 'ST', time: '30 minutes ago', type: 'create' as const },
  { id: '8', action: 'Updated entity', user: 'Michael Brown', avatar: 'MB', time: '35 minutes ago', type: 'update' as const },
  { id: '9', action: 'Deleted entity', user: 'Olivia Lee', avatar: 'OL', time: '40 minutes ago', type: 'delete' as const },
  { id: '10', action: 'Created new conversation', user: 'William White', avatar: 'WW', time: '45 minutes ago', type: 'create' as const },
  { id: '11', action: 'Updated conversation', user: 'Ava Martin', avatar: 'AM', time: '50 minutes ago', type: 'update' as const },
  { id: '12', action: 'Deleted conversation', user: 'Ethan Hall', avatar: 'EH', time: '55 minutes ago', type: 'delete' as const },
]

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id)
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(n)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}