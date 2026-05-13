import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        bone: '#F1ECDF',
        lamp: {
          DEFAULT: '#FFB84D',
          warm: '#FFD37A',
          deep: '#E89A1F',
        },
      },
      fontFamily: {
        sans: ['var(--font-familjen-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'lamp-glow': 'radial-gradient(circle at 50% 50%, rgba(255,184,77,0.18), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
