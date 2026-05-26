import type { ReactNode } from 'react';
import { BrandLogo } from '@/components/brand-logo';

const palette = [
  { label: 'Background', value: '#0a0a0a' },
  { label: 'Surface', value: '#18181b' },
  { label: 'Cyan', value: '#06b6d4' },
  { label: 'Blue', value: '#3b82f6' },
  { label: 'Violet', value: '#8b5cf6' },
  { label: 'Text', value: '#ffffff' }
];

const useCases = [
  'Navbar wordmark',
  'App icon / favicon',
  'Hero logo lockup',
  'Sidebar monogram',
  'Light mode inverse',
  'Dark mode primary'
];

export function BrandKit() {
  return (
    <div className="space-y-8 text-zinc-100">
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Brand identity</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">CollegeHunt visual system</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
          A modern AI college platform identity built around a compass-like mark, premium glass surfaces, and electric gradients.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Logo system</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <BrandTile label="Main logo" dark>
              <BrandLogo showTagline />
            </BrandTile>
            <BrandTile label="Horizontal" dark>
              <BrandLogo variant="horizontal" showTagline />
            </BrandTile>
            <BrandTile label="Icon only" dark>
              <BrandLogo variant="icon" />
            </BrandTile>
            <BrandTile label="Monogram" dark>
              <BrandLogo variant="monogram" />
            </BrandTile>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div>
            <h2 className="text-xl font-semibold text-white">Guidelines</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
              <li>Use the icon-only mark for favicon, app icon, and compact UI surfaces.</li>
              <li>Use the full logo lockup in navbar, onboarding, and marketing headers.</li>
              <li>Keep all logo uses on dark surfaces with cyan-violet accents or white inverse on light cards.</li>
              <li>Prefer ample spacing and soft blur/glow instead of hard outlines or cluttered strokes.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.24em] text-zinc-500">Use cases</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {useCases.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Palette</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {palette.map((color) => (
              <div key={color.label} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-2xl border border-white/10" style={{ background: color.value }} />
                  <div>
                    <p className="text-sm font-medium text-white">{color.label}</p>
                    <p className="text-xs text-zinc-400">{color.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Typography</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Primary</p>
              <p className="mt-2 text-3xl font-semibold text-white">Inter</p>
              <p className="mt-1 text-sm text-zinc-400">UI, content, and dashboard text.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Display</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Space Grotesk</p>
              <p className="mt-1 text-sm text-zinc-400">Headings and premium editorial style moments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BrandTile({ label, dark, children }: { label: string; dark?: boolean; children: ReactNode }) {
  return (
    <div className={`rounded-[1.5rem] border p-5 ${dark ? 'border-white/10 bg-white/5' : 'border-zinc-200 bg-white'}`}>
      <p className={`text-xs uppercase tracking-[0.24em] ${dark ? 'text-zinc-500' : 'text-zinc-500'}`}>{label}</p>
      <div className="mt-5 flex min-h-[96px] items-center justify-center">{children}</div>
    </div>
  );
}
