import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        cardForeground: 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        mutedForeground: 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        accent: 'hsl(var(--accent))',
        accentForeground: 'hsl(var(--accent-foreground))',
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#b9dcff',
          300: '#84c2ff',
          400: '#4f9fff',
          500: '#2f7af7',
          600: '#1f5ee0',
          700: '#1d4db4',
          800: '#1d448f',
          900: '#1d3b73'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(47, 122, 247, 0.12)',
        card: '0 18px 45px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(47,122,247,0.18), transparent 38%), radial-gradient(circle at top right, rgba(15,23,42,0.12), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.9), rgba(248,250,252,1))'
      }
    }
  },
  plugins: []
};

export default config;
