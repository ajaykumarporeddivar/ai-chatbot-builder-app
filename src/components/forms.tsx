'use client';

import React, { useState } from 'react';
import { Button, Input, Badge } from '@/components/ui';
import { Entity } from '@/lib/data';

interface CreateEntityFormProps {
  onSubmit: (entity: Entity) => void;
}

const CreateEntityForm: React.FC<CreateEntityFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entity: Entity = {
      name,
      description,
      fields,
    };
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(entity);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setDescription('');
    setFields({});
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        error={errors.name}
      />
      <Input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        label="Description"
        error={errors.description}
      />
      <Button type="submit" variant="primary">
        Create Entity
      </Button>
      {submitted && (
        <Badge variant="success" className="mt-2">
          Entity created successfully!
        </Badge>
      )}
      <Button type="button" variant="outline" onClick={handleReset} className="mt-2">
        Reset
      </Button>
    </form>
  );
};

interface SearchAndFilterProps {
  onChange: (filters: { search: string; status: string; dateRange: string; sortBy: string; sortDir: 'asc' | 'desc' }) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onChange }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange({ search: event.target.value, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
    onChange({ search, status: event.target.value, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDateRange(event.target.value);
    onChange({ search, status, dateRange: event.target.value, sortBy, sortDir });
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    onChange({ search, status, dateRange, sortBy: event.target.value, sortDir });
  };

  const handleSortDirChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDir(event.target.value as 'asc' | 'desc');
    onChange({ search, status, dateRange, sortBy, sortDir: event.target.value as 'asc' | 'desc' });
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('');
    setDateRange('');
    setSortBy('');
    setSortDir('asc');
    onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' });
  };

  return (
    <div className="flex flex-col">
      <Input
        type="search"
        value={search}
        onChange={handleSearchChange}
        label="Search"
        icon={<LucideButton.Search />}
      />
      <select value={status} onChange={handleStatusChange} className="mt-2">
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <select value={sortBy} onChange={handleSortByChange} className="mt-2">
        <option value="">Select Sort By</option>
        <option value="name">Name</option>
        <option value="description">Description</option>
      </select>
      <select value={sortDir} onChange={handleSortDirChange} className="mt-2">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <Button type="button" variant="outline" onClick={handleClearFilters} className="mt-2">
        Clear Filters
      </Button>
    </div>
  );
};

interface ExportButtonProps {
  data: any[];
  onClick: () => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ data, onClick }) => {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <Button type="button" variant="primary" onClick={handleExport}>
      Export to CSV
      {exported && <Badge variant="success" className="ml-2">
        Exported!
      </Badge>}
    </Button>
  );
};

export { CreateEntityForm, SearchAndFilter, ExportButton };