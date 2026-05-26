export type { CollegeType, CollegeStream } from '@prisma/client';

import type { CollegeType, CollegeStream } from '@prisma/client';

export type CollegeCardData = {
  id: string;
  name: string;
  city: string;
  state: string;
  type: CollegeType;
  stream: CollegeStream;
  fees: number;
  avgPackage: number;
  placementPct: number;
  nirfRank: number | null;
  courses?: Array<{
    id: string;
    name: string;
    duration: string;
    fees: number;
  }>;
};

export const streamLabel: Record<CollegeStream, string> = {
  Engineering: 'Engineering',
  Medical: 'Medical',
  MBA: 'MBA'
};

export const typeLabel: Record<CollegeType, string> = {
  Government: 'Government',
  Private: 'Private'
};

export const compareFields = [
  { key: 'fees' as const, label: 'Fees', better: 'lower' as const },
  { key: 'placementPct' as const, label: 'Placement %', better: 'higher' as const },
  { key: 'avgPackage' as const, label: 'Avg Package', better: 'higher' as const },
  { key: 'nirfRank' as const, label: 'NIRF Rank', better: 'lower' as const }
];
