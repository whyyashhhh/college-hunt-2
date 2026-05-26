"use client";

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/hero';
import { SearchBar } from '@/components/search-bar';
import { FeatureCards } from '@/components/feature-cards';
import { StatsSection } from '@/components/stats-section';
import { CollegeCard } from '@/components/college-card';
import { compactNumber } from '@/lib/format';
import type { CollegeCardData } from '@/lib/college-utils';

const streamOptions = ['All', 'Engineering', 'Medical', 'MBA'] as const;
const typeOptions = ['All', 'Government', 'Private'] as const;

type LoadState = {
  colleges: CollegeCardData[];
  loading: boolean;
  error: string | null;
  notice: string | null;
};

export function HomeClient() {
  const [query, setQuery] = useState('');
  const [stream, setStream] = useState<(typeof streamOptions)[number]>('All');
  const [city, setCity] = useState('');
  const [type, setType] = useState<(typeof typeOptions)[number]>('All');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [{ colleges, loading, error, notice }, setLoadState] = useState<LoadState>({
    colleges: [],
    loading: true,
    error: null,
    notice: null
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 280);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    const loadColleges = async () => {
      setLoadState((current) => ({ ...current, loading: true, error: null }));

      const params = new URLSearchParams();
      if (debouncedQuery) params.set('search', debouncedQuery);
      if (stream !== 'All') params.set('stream', stream);
      if (city.trim()) params.set('city', city.trim());
      if (type !== 'All') params.set('type', type);

      try {
        const response = await fetch(`/api/colleges?${params.toString()}`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error('Unable to fetch colleges');
        }

        const data = (await response.json()) as CollegeCardData[];
        setLoadState((current) => ({ ...current, colleges: data, loading: false }));
      } catch (loadError) {
        if (controller.signal.aborted) return;
        setLoadState((current) => ({
          ...current,
          loading: false,
          error: loadError instanceof Error ? loadError.message : 'Something went wrong'
        }));
      }
    };

    void loadColleges();

    return () => controller.abort();
  }, [city, debouncedQuery, stream, type]);

  const stats = useMemo(() => {
    const averagePlacement = colleges.length
      ? colleges.reduce((sum, college) => sum + college.placementPct, 0) / colleges.length
      : 0;

    return [
      { label: 'Colleges', value: compactNumber(colleges.length) },
      { label: 'Avg placement', value: colleges.length ? `${averagePlacement.toFixed(1)}%` : '0%' },
      { label: 'Streams', value: '3' },
      { label: 'Cities covered', value: compactNumber(new Set(colleges.map((college) => college.city)).size) }
    ];
  }, [colleges]);

  return (
    <div className="space-y-8">
      <Hero />
      <StatsSection />

      <section id="explore" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-cyan-300">Search Experience</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Refine colleges with live filters.</h2>
          </div>
          <div className="hidden text-sm text-zinc-400 md:block">
            {stats[0].value} results, debounced search, live API-backed filtering.
          </div>
        </div>
        <SearchBar
          query={query}
          city={city}
          stream={stream}
          type={type}
          onQueryChange={setQuery}
          onCityChange={setCity}
          onStreamChange={setStream}
          onTypeChange={setType}
        />
      </section>

      <FeatureCards />

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-violet-300">Trending Colleges</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Discover standout options at a glance.</h2>
          </div>
          <p className="text-sm text-zinc-400">
            Showing <span className="font-semibold text-white">{colleges.length}</span> colleges
          </p>
        </div>

        {notice ? (
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
            {notice}
          </div>
        ) : null}

        {error ? (
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-[360px] animate-pulse rounded-[2rem] border border-white/10 bg-white/5" />
            ))}
          </div>
        ) : colleges.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {colleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onSaved={(message) => setLoadState((current) => ({ ...current, notice: message }))}
              />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-12 text-center text-zinc-300 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">No colleges matched your filters.</h2>
            <p className="mt-3 text-zinc-400">Try widening the city or stream filters, or clear the search text.</p>
          </div>
        )}
      </section>
    </div>
  );
}
