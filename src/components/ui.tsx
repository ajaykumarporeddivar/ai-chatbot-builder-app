'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button as LucideButton } from 'lucide-react-native';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(...inputs);
}

export function Button({ children, variant = 'primary', size = 'md', loading = false, disabled = false, onClick, className, href }: ButtonProps) {
  const classes = cn(
    'flex justify-center items-center',
    {
      'bg-zinc-900 text-white hover:bg-zinc-700': variant === 'primary',
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200': variant === 'secondary',
      'border border-zinc-200 text-zinc-900 hover:text-zinc-700': variant === 'outline',
      'text-zinc-900 hover:text-zinc-700': variant === 'ghost',
      'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
    },
    {
      'py-2 px-4 text-sm': size === 'sm',
      'py-3 px-6 text-md': size === 'md',
      'py-4 px-8 text-lg': size === 'lg',
    },
    { 'opacity-50 pointer-events-none': loading || disabled },
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}>{children}</div>;
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('bg-white border-b border-zinc-200 py-4 px-6', className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h2 className={cn('text-zinc-900 font-bold text-xl', className)}>{children}</h2>;
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('text-zinc-600 py-4 px-6', className)}>{children}</div>;
}

export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple' }) {
  const classes = cn(
    'py-1 px-2 text-xs',
    {
      'bg-zinc-100 text-zinc-900': variant === 'default',
      'bg-emerald-50 text-emerald-600': variant === 'success',
      'bg-amber-50 text-amber-600': variant === 'warning',
      'bg-red-50 text-red-600': variant === 'error',
      'bg-blue-50 text-blue-600': variant === 'info',
      'bg-purple-50 text-purple-600': variant === 'purple',
    },
  );

  return <span className={classes}>{children}</span>;
}

export function Input({ label, placeholder, value, onChange, error, type = 'text', icon, disabled, className }: { label: string; placeholder: string; value: string; onChange: (value: string) => void; error?: string; type?: string; icon?: React.ReactNode; disabled?: boolean; className?: string }) {
  const classes = cn(
    'block w-full py-2 pl-10 text-sm border border-zinc-200 rounded-md',
    { 'bg-zinc-100 text-zinc-900': disabled },
    className,
  );

  return (
    <div>
      <label className="block text-zinc-900 text-sm font-bold">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-2">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={classes}
          disabled={disabled}
        />
      </div>
      {error && <div className="text-red-600 text-xs">{error}</div>}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 3v1m6 9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

export function Avatar({ name, size = 'md', className }: { name: string; size?: 'xs' | 'sm' | 'md' | 'lg'; className?: string }) {
  const initials = name.split(' ').map((word) => word[0].toUpperCase()).join('');
  const color = String(name.charCodeAt(0)).slice(-1);

  const classes = cn(
    'flex justify-center items-center rounded-full',
    {
      'w-6 h-6 text-xs': size === 'xs',
      'w-8 h-8 text-sm': size === 'sm',
      'w-10 h-10 text-md': size === 'md',
      'w-12 h-12 text-lg': size === 'lg',
    },
    {
      'bg-red-500 text-white': color === '1',
      'bg-orange-500 text-white': color === '2',
      'bg-yellow-500 text-zinc-900': color === '3',
      'bg-green-500 text-zinc-900': color === '4',
      'bg-blue-500 text-white': color === '5',
      'bg-indigo-500 text-white': color === '6',
    },
    className,
  );

  return <div className={classes}>{initials}</div>;
}

export function StatCard({ title, value, change, changeType = 'neutral', icon, sparkline }: { title: string; value: number; change: number; changeType?: 'up' | 'down' | 'neutral'; icon?: React.ReactNode; sparkline?: number[] }) {
  const classes = cn(
    'flex flex-col',
    'bg-white border border-zinc-200 rounded-xl shadow-sm',
  );

  return (
    <div className={classes}>
      <div className="p-4">
        <div className="flex justify-between items-center">
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="text-zinc-900 font-bold text-md">{title}</h2>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-zinc-900 font-bold text-2xl">{value}</h1>
          {changeType === 'up' ? (
            <div className="text-emerald-600">
              <LucideButton name="arrow-up" size={16} />
              {change}%
            </div>
          ) : changeType === 'down' ? (
            <div className="text-red-600">
              <LucideButton name="arrow-down" size={16} />
              {change}%
            </div>
          ) : (
            <div className="text-zinc-500">{change}%</div>
          )}
        </div>
        {sparkline && (
          <div className="mt-4">
            <svg width="100%" height="40" viewBox="0 0 100 40">
              <polyline
                points={sparkline
                  .map((value, index) => `${index * 10} ${40 - value * 10}`)
                  .join(' ')}
                stroke="#6366f1"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export function Modal({ open, onClose, title, children, size = 'md' }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode; size?: 'sm' | 'md' | 'lg' }) {
  if (!open) return null;

  const classes = cn(
    'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4',
    {
      'max-w-sm': size === 'sm',
      'max-w-md': size === 'md',
      'max-w-lg': size === 'lg',
    },
  );

  return (
    <div className={classes}>
      <div className="bg-white rounded-2xl shadow-xl animate-slideup">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-zinc-900 font-bold text-md">{title}</h2>
            <button className="text-zinc-500 hover:text-zinc-900" onClick={onClose}>
              <LucideButton name="x" size={16} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export function EmptyState({ icon, title, description, action }: { icon: React.ReactNode; title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-zinc-100 rounded-md p-6">
        <div className="flex flex-col items-center">
          {icon}
          <h2 className="text-zinc-900 font-bold text-md mt-4">{title}</h2>
          <p className="text-zinc-600 text-sm mt-2">{description}</p>
          {action && <div className="mt-4">{action}</div>}
        </div>
      </div>
    </div>
  );
}

export function Table<T>({ columns, data, onRowClick }: { columns: { key: string; label: string; render?: (row: T) => React.ReactNode }[]; data: T[]; onRowClick?: (row: T) => void }) {
  return (
    <table className="w-full text-zinc-600">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="py-2 px-4 text-zinc-900 font-bold text-sm">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={cn('hover:bg-zinc-50', { 'cursor-pointer': onRowClick })} onClick={() => onRowClick && onRowClick(row)}>
            {columns.map((column) => (
              <td key={column.key} className="py-2 px-4 text-sm">
                {column.render ? column.render(row) : row[column.key as keyof T]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}