import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const college = await prisma.college.findUnique({
    where: { id },
    include: {
      courses: {
        orderBy: { name: 'asc' }
      }
    }
  });

  if (!college) {
    return NextResponse.json({ message: 'College not found' }, { status: 404 });
  }

  return NextResponse.json(college);
}
