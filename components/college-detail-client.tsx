"use client";

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, RadarChart, Radar, PolarGrid, PolarAngleAxis, Legend } from 'recharts';
import { Compass, GraduationCap, IndianRupee, Landmark, ShieldCheck } from 'lucide-react';
import { CollegeActions } from '@/components/college-actions';
import { CollegeBadges } from '@/components/college-badges';
import { compactNumber, percentage, rupee } from '@/lib/format';
import type { CollegeCardData } from '@/lib/college-utils';

type CollegeWithCourses = CollegeCardData & {
  courses: Array<{ id: string; name: string; duration: string; fees: number }>;
};

type Props = {
  college: CollegeWithCourses;
};

const tabItems = ['Overview', 'Placements', 'Fees', 'Courses'] as const;

export function CollegeDetailClient({ college }: Props) {
  const [activeTab, setActiveTab] = useState<(typeof tabItems)[number]>('Overview');

  const placementData = useMemo(
    () => [
      { label: 'Placement %', value: college.placementPct },
      { label: 'Avg package', value: college.avgPackage / 100000 },
      { label: 'Fees', value: Math.max(5, 120 - college.fees / 50000) },
      { label: 'Rank', value: college.nirfRank ? Math.max(5, 100 - college.nirfRank) : 55 }
    ],
    [college]
  );

  const barData = useMemo(
    () =>
      college.courses.map((course) => ({
        name: course.name.length > 18 ? `${course.name.slice(0, 18)}...` : course.name,
        fees: course.fees / 1000
      })),
    [college.courses]
  );

  const admissionScore = Math.min(100, Math.round(college.placementPct * 0.72 + (college.nirfRank ? 100 - college.nirfRank : 55) * 0.18));

  return (
    <div className="space-y-8 text-zinc-100">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_24%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <CollegeBadges stream={college.stream} type={college.type} />
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{college.name}</h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-300">
                {college.city}, {college.state}. A premium dashboard view with fees, placements, rankings, and course data.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge icon={Landmark} label="NIRF" value={college.nirfRank ? `#${college.nirfRank}` : 'N/A'} />
              <Badge icon={ShieldCheck} label="Placement" value={percentage(college.placementPct)} />
              <Badge icon={IndianRupee} label="Avg package" value={rupee(college.avgPackage)} />
            </div>
            <CollegeActions collegeId={college.id} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MetricCard label="Annual fees" value={rupee(college.fees)} description="Approximate tuition and academic cost" icon={IndianRupee} />
            <MetricCard label="Placement rate" value={percentage(college.placementPct)} description="Latest known placement signal" icon={GraduationCap} />
            <MetricCard label="Courses" value={compactNumber(college.courses.length)} description="Programs fetched from relation table" icon={Compass} />
            <MetricCard label="Admission score" value={`${admissionScore}%`} description="A simple decision support indicator" icon={ShieldCheck} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-6">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as (typeof tabItems)[number])}>
            <TabsList className="mb-6 inline-flex rounded-full border border-white/10 bg-zinc-950/80 p-1">
              {tabItems.map((item) => (
                <TabsTrigger
                  key={item}
                  value={item}
                  className="rounded-full px-4 py-2 text-sm text-zinc-400 transition data-[state=active]:bg-white data-[state=active]:text-zinc-950"
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="Overview" className="space-y-4 outline-none">
              <div className="grid gap-4 sm:grid-cols-3">
                <MiniStat label="College type" value={college.type} />
                <MiniStat label="Stream" value={college.stream} />
                <MiniStat label="Location" value={`${college.city}, ${college.state}`} />
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Overview</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
                  Use shortlist and compare actions to build a focused application plan with fee and placement context.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="Placements" className="space-y-4 outline-none">
              <div className="h-[320px] rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={placementData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="label" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                    <Radar dataKey="value" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.28} />
                    <Tooltip
                      contentStyle={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, color: '#fff' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="Fees" className="space-y-4 outline-none">
              <div className="h-[320px] rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-3">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#a1a1aa', fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ background: '#09090b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, color: '#fff' }}
                    />
                    <Bar dataKey="fees" fill="url(#feesGradient)" radius={[12, 12, 0, 0]} />
                    <defs>
                      <linearGradient id="feesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="Courses" className="space-y-4 outline-none">
              <div className="grid gap-4 md:grid-cols-2">
                {college.courses.map((course) => (
                  <motion.article
                    key={course.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Course</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{course.name}</h3>
                    <div className="mt-4 flex items-center justify-between text-sm text-zinc-300">
                      <span>{course.duration}</span>
                      <span>{rupee(course.fees)}</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Admission predictor</p>
            <div className="mt-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>Admission chance</span>
                  <span>{admissionScore}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" style={{ width: `${admissionScore}%` }} />
                </div>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-4 text-sm leading-6 text-zinc-300">
                High placement quality and ranking signal make this a strong shortlist candidate.
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {[
              { label: 'Fees', value: rupee(college.fees) },
              { label: 'Placement', value: percentage(college.placementPct) },
              { label: 'Avg package', value: rupee(college.avgPackage) },
              { label: 'NIRF', value: college.nirfRank ? `#${college.nirfRank}` : 'N/A' }
            ].map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ icon: Icon, label, value }: { icon: typeof Compass; label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">
      <Icon className="h-4 w-4 text-cyan-300" />
      <span className="text-zinc-400">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

function MetricCard({ label, value, description, icon: Icon }: { label: string; value: string; description: string; icon: typeof Compass }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/25">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{label}</p>
          <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
