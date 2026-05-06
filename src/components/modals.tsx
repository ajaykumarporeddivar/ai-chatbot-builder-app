'use client';

import React, { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';

interface EntityDetailModalProps {
  item: Record<string, unknown> | null;
  open: boolean;
  onClose: () => void;
  title: string;
}

const EntityDetailModal: React.FC<EntityDetailModalProps> = ({ item, open, onClose, title }) => {
  if (!item) return null;

  const handleClose = () => {
    onClose();
  };

  const handleApprove = () => {
    console.log('Approve');
    onClose();
  };

  const handleArchive = () => {
    console.log('Archive');
    onClose();
  };

  const handleDelete = () => {
    console.log('Delete');
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title={title}>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(item).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span className="text-zinc-600">{key}</span>
            <span className="text-zinc-900">{value}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="primary" onClick={handleApprove}>
          Approve
        </Button>
        <Button variant="outline" onClick={handleArchive} className="ml-2">
          Archive
        </Button>
        <Button variant="danger" onClick={handleDelete} className="ml-2">
          Delete
        </Button>
      </div>
    </Modal>
  );
};

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title={title}>
      <p className="text-zinc-600">{message}</p>
      <div className="flex justify-end mt-4">
        <Button variant={variant === 'danger' ? 'danger' : 'primary'} onClick={handleConfirm}>
          {confirmLabel}
        </Button>
        <Button variant="outline" onClick={handleClose} className="ml-2">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string; icon?: React.ReactNode; description?: string }>;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onClose, items }) => {
  const [search, setSearch] = useState('');
  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleItemClick = (item: { label: string; href: string; icon?: React.ReactNode; description?: string }) => {
    window.location.href = item.href;
  };

  return (
    <Modal open={open} onClose={onClose} title="Command Palette">
      <input
        type="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="w-full p-2 pl-10 text-zinc-600 border-zinc-200 rounded-lg"
      />
      <ul className="mt-2">
        {filteredItems.map((item) => (
          <li key={item.label} className="py-2 px-4 hover:bg-zinc-100">
            <a href={item.href} onClick={() => handleItemClick(item)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export { EntityDetailModal, ConfirmModal, CommandPalette };