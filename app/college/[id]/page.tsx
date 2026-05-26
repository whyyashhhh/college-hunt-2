import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { CollegeDetailClient } from '@/components/college-detail-client';

export default async function CollegeDetailPage({ params }: { params: { id: string } }) {
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
    notFound();
  }

  return <CollegeDetailClient college={college} />;
}
