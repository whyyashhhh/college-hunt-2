"use client";

import { addCompareId, addShortlistId, getOrCreateUserId } from '@/lib/storage';

type Props = {
  collegeId: string;
};

export function CollegeActions({ collegeId }: Props) {
  const shortlist = async () => {
    const userId = getOrCreateUserId();
    try {
      await fetch('/api/shortlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collegeId, userId })
      });
    } catch {
      // Fallback to local storage when the API is unavailable.
    }

    addShortlistId(collegeId);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={shortlist}
        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Add to Shortlist
      </button>
      <button
        type="button"
        onClick={() => addCompareId(collegeId)}
        className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
      >
        Add to Compare
      </button>
      <a
        href="/compare"
        className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
      >
        Open Compare
      </a>
      <a
        href="/shortlist"
        className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
      >
        Open Shortlist
      </a>
    </div>
  );
}
