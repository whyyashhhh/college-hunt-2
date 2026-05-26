# CollegeHunt

CollegeHunt is a Next.js 14 + Prisma app for discovering, comparing, and shortlisting Indian colleges.

## Production Deployment

### Environment Variables

Set these in `.env` locally and in Vercel project settings:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `NEXT_PUBLIC_APP_URL` - your production URL, for example `https://collegehunt.vercel.app`

### Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables above.
4. Deploy with the default Next.js framework preset.
5. Run Prisma migrations against Neon before or during the deployment workflow with `npx prisma migrate deploy`.

## Setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. Install dependencies with `npm install`.
3. Run migrations with `npx prisma migrate dev`.
4. Seed data with `npm run prisma:seed`.
5. Start the app with `npm run dev`.

## Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- Prisma ORM
- PostgreSQL
