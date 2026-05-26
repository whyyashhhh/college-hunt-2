"use client";

import type { ChangeEvent } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export type FilterOption = 'All' | 'Engineering' | 'Medical' | 'MBA' | 'Government' | 'Private';

type Props = {
  query: string;
  city: string;
  stream: 'All' | 'Engineering' | 'Medical' | 'MBA';
  type: 'All' | 'Government' | 'Private';
  onQueryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onStreamChange: (value: 'All' | 'Engineering' | 'Medical' | 'MBA') => void;
  onTypeChange: (value: 'All' | 'Government' | 'Private') => void;
};

const streams = ['All', 'Engineering', 'Medical', 'MBA'] as const;
const types = ['All', 'Government', 'Private'] as const;

export function SearchBar({ query, city, stream, type, onQueryChange, onCityChange, onStreamChange, onTypeChange }: Props) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-6">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-zinc-200 transition focus-within:border-cyan-400/50 focus-within:ring-1 focus-within:ring-cyan-400/40">
          <Search className="h-4 w-4 text-cyan-300" />
          <input
            value={query}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onQueryChange(event.target.value)}
            placeholder="Search by college name"
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </label>

        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-zinc-200 transition focus-within:border-cyan-400/50 focus-within:ring-1 focus-within:ring-cyan-400/40">
          <SlidersHorizontal className="h-4 w-4 text-violet-300" />
          <input
            value={city}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onCityChange(event.target.value)}
            placeholder="City"
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </label>

        <Select value={stream} onChange={(event) => onStreamChange(event.target.value as typeof stream)} options={streams} />
        <Select value={type} onChange={(event) => onTypeChange(event.target.value as typeof type)} options={types} />
      </div>
    </section>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (event: ChangeEvent<HTMLSelectElement>) => void; options: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-zinc-200 transition focus-within:border-cyan-400/50 focus-within:ring-1 focus-within:ring-cyan-400/40">
      <select value={value} onChange={onChange} className="w-full bg-transparent text-sm outline-none">
        {options.map((option) => (
          <option key={option} className="bg-zinc-950 text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
