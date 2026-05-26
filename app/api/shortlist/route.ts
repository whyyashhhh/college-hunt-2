import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId') ?? 'anonymous';

  const shortlist = await prisma.shortlist.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    include: {
      college: {
        include: {
          courses: {
            orderBy: { name: 'asc' }
          }
        }
      }
    }
  });

  return NextResponse.json(shortlist);
}

export async function POST(request: Request) {
  const body = (await request.json()) as { collegeId?: string; userId?: string };
  const collegeId = body.collegeId?.trim();
  const userId = body.userId?.trim() || 'anonymous';

  if (!collegeId) {
    return NextResponse.json({ message: 'collegeId is required' }, { status: 400 });
  }

  const college = await prisma.college.findUnique({ where: { id: collegeId } });
  if (!college) {
    return NextResponse.json({ message: 'College not found' }, { status: 404 });
  }

  const existing = await prisma.shortlist.findFirst({
    where: {
      collegeId,
      userId
    }
  });

  if (existing) {
    return NextResponse.json(existing);
  }

  const shortlist = await prisma.shortlist.create({
    data: {
      collegeId,
      userId
    }
  });

  return NextResponse.json(shortlist, { status: 201 });
}
