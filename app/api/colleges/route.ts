import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get('ids');
  const search = searchParams.get('search');
  const stream = searchParams.get('stream');
  const city = searchParams.get('city');
  const type = searchParams.get('type');

  const colleges = await prisma.college.findMany({
    where: {
      ...(ids
        ? {
            id: {
              in: ids.split(',').filter(Boolean)
            }
          }
        : {}),
      ...(search
        ? {
            name: {
              contains: search,
              mode: 'insensitive'
            }
          }
        : {}),
      ...(stream ? { stream: stream as 'Engineering' | 'Medical' | 'MBA' } : {}),
      ...(city
        ? {
            city: {
              contains: city,
              mode: 'insensitive'
            }
          }
        : {}),
      ...(type ? { type: type as 'Government' | 'Private' } : {})
    },
    orderBy: [{ nirfRank: 'asc' }, { placementPct: 'desc' }, { name: 'asc' }],
    select: {
      id: true,
      name: true,
      city: true,
      state: true,
      type: true,
      stream: true,
      fees: true,
      avgPackage: true,
      placementPct: true,
      nirfRank: true
    }
  });

  return NextResponse.json(colleges);
}
