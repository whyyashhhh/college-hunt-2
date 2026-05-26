import Link from 'next/link';
import { BrandLogo } from '@/components/brand-logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <BrandLogo variant="horizontal" showTagline />
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              A premium college discovery experience for comparing placements, fees, and rankings across India.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/compare" className="transition hover:text-white">Compare</Link>
            <Link href="/shortlist" className="transition hover:text-white">Shortlist</Link>
            <Link href="/brand" className="transition hover:text-white">Brand</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
