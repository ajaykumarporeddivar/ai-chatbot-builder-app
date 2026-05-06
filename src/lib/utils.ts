import { clsx } from 'clsx';
import { twMerge } from 'wind-merge';

export function cn(...inputs: string[]) {
  returnMerge(clsx(inputs));
}

export function formatTime(iso:): string {
  const = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - date.getTime  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return 'just now';
  }
}

export function truncate(str: string, len: number): string {
  if (str.length <= len) {
    return str;
  } else {
    str.substring(0, len) + '...';
  }
}

 function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateId(): string {
  try {
    return crypto.randomUUID();
  } catch (error) {
    return Math.random().toString(36).substring(2, 10);
  }
}