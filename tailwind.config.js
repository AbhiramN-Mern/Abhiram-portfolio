/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0d14',
          surface: '#111726',
          card: '#131b2e',
          border: '#1e293b',
          'border-hover': '#334155',
          primary: '#10b981',
          'primary-hover': '#059669',
          text: '#f1f5f9',
          muted: '#94a3b8',
          subtle: '#64748b',
        },
        terminal: {
          bg: '#0a0d14',
          card: '#111726',
          border: '#1e293b',
          green: '#10b981',
          'green-dim': '#059669',
          'green-glow': '#10b981',
          text: '#f1f5f9',
          muted: '#94a3b8',
          comment: '#64748b',
          accent: '#10b981',
          red: '#ef4444',
          yellow: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.25), 0 1px 2px -1px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 4px 16px 0 rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
