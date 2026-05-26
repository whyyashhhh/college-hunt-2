"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookmarkX, Sparkles } from 'lucide-react';
import { CollegeCard } from '@/components/college-card';
import { getOrCreateUserId, getShortlistIds } from '@/lib/storage';
import type { CollegeCardData } from '@/lib/college-utils';

type SavedCollege = {
  id: string;
  college: CollegeCardData;
};

export function ShortlistClient() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<SavedCollege[]>([]);
  const [source, setSource] = useState<'database' | 'local' | null>(null);

  useEffect(() => {
    const load = async () => {
      const userId = getOrCreateUserId();

      try {
        const response = await fetch(`/api/shortlist?userId=${encodeURIComponent(userId)}`);
        if (!response.ok) throw new Error('Shortlist API unavailable');

        const data = (await response.json()) as SavedCollege[];
        if (data.length > 0) {
          setItems(data);
          setSource('database');
          setLoading(false);
          return;
        }
      } catch {
        // Local fallback below.
      }

      const shortlistIds = getShortlistIds();
      if (shortlistIds.length === 0) {
        setItems([]);
        setSource('local');
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/colleges?ids=${shortlistIds.join(',')}`);
      const data = (await response.json()) as CollegeCardData[];
      setItems(data.map((college) => ({ id: college.id, college })));
      setSource('local');
      setLoading(false);
    };

    void load();
  }, []);

  if (loading) {
    return <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-zinc-200 backdrop-blur-xl">Loading shortlist...</div>;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300">
          <BookmarkX className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Your shortlist is empty.</h2>
        <p className="mt-3 text-zinc-400">Add colleges from the home page and they will appear here, with a local fallback if needed.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950">
          Browse colleges
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-zinc-100">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">Saved collection</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Shortlisted Colleges</h1>
          <p className="mt-2 text-zinc-400">
            {source === 'database' ? 'Saved in the database for this browser profile.' : 'Loaded from local storage fallback.'}
          </p>
        </div>
        <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10">
          Add more
        </Link>
      </div>

      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <Sparkles className="h-4 w-4 text-cyan-300" />
        <span>{items.length} colleges saved</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <CollegeCard college={item.college} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
