import type { CollegeStream, CollegeType } from '@/lib/college-utils';
import { streamLabel, typeLabel } from '@/lib/college-utils';

export function CollegeBadges({ stream, type }: { stream: CollegeStream; type: CollegeType }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{streamLabel[stream]}</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{typeLabel[type]}</span>
    </div>
  );
}
