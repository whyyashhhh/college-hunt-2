"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookmarkPlus, ChevronRight, GitCompareArrows, MapPin, Sparkles } from 'lucide-react';
import { addCompareId, addShortlistId, getOrCreateUserId } from '@/lib/storage';
import { compactNumber, percentage, rupee } from '@/lib/format';
import type { CollegeCardData } from '@/lib/college-utils';

type Props = {
  college: CollegeCardData;
  onSaved?: (message: string) => void;
};

export function CollegeCard({ college, onSaved }: Props) {
  const handleShortlist = async () => {
    const userId = getOrCreateUserId();
    try {
      const response = await fetch('/api/shortlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collegeId: college.id, userId })
      });

      if (!response.ok) {
        throw new Error('Failed to save shortlist');
      }

      addShortlistId(college.id);
      onSaved?.(`${college.name} added to shortlist`);
    } catch {
      addShortlistId(college.id);
      onSaved?.(`${college.name} saved locally`);
    }
  };

  const handleCompare = () => {
    addCompareId(college.id);
    onSaved?.(`${college.name} added to compare`);
  };

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/25 backdrop-blur-xl"
    >
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.36),transparent_32%),linear-gradient(135deg,rgba(24,24,27,0.96),rgba(3,7,18,0.88))]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-100 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          {college.type}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <h3 className="max-w-[80%] text-2xl font-semibold tracking-tight text-white">{college.name}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
              <MapPin className="h-4 w-4 text-cyan-300" />
              <span>
                {college.city}, {college.state}
              </span>
            </div>
          </div>
          {college.nirfRank ? (
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-right text-white backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-200">NIRF</p>
              <p className="text-lg font-semibold">#{college.nirfRank}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Stat label="Fees" value={rupee(college.fees)} />
          <Stat label="Avg package" value={rupee(college.avgPackage)} compact />
          <Stat label="Placement" value={percentage(college.placementPct)} />
          <Stat label="Stream" value={college.stream} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/college/${college.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-cyan-100"
        >
          View Details
          <ChevronRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={handleShortlist}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100"
        >
          <BookmarkPlus className="h-4 w-4" />
          Add to Shortlist
        </button>
        <button
          type="button"
          onClick={handleCompare}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-violet-100"
        >
          <GitCompareArrows className="h-4 w-4" />
          Add to Compare
        </button>
      </div>
      </div>
    </motion.article>
  );
}

function Stat({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/70 px-3 py-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className={`mt-1 font-semibold text-white ${compact ? 'text-sm' : 'text-base'}`}>{value}</p>
    </div>
  );
}
