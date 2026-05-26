require('tsx/cjs');

const { PrismaClient } = require('@prisma/client');
const { seedColleges } = require('../data/seed-colleges.ts');

const prisma = new PrismaClient();

async function main() {
  await prisma.shortlist.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();

  for (const college of seedColleges) {
    await prisma.college.create({
      data: {
        name: college.name,
        city: college.city,
        state: college.state,
        type: college.type,
        stream: college.stream,
        fees: college.fees,
        avgPackage: college.avgPackage,
        placementPct: college.placementPct,
        nirfRank: college.nirfRank,
        courses: {
          create: college.courses
        }
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
