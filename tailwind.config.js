/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0b0e13',
          card: '#0f1419',
          border: '#1e2d3d',
          green: '#10b981',
          'green-dim': '#059669',
          'green-glow': '#34d399',
          text: '#e2e8f0',
          muted: '#64748b',
          comment: '#475569',
          accent: '#38bdf8',
          red: '#f87171',
          yellow: '#fbbf24',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'type': 'typing 2s steps(40) 1s both',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 4px #10b981' },
          '50%': { boxShadow: '0 0 12px #10b981, 0 0 24px #059669' },
        },
      },
      boxShadow: {
        'terminal': '0 0 0 1px #1e2d3d, 0 4px 24px rgba(0,0,0,0.4)',
        'card': '0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px #1e2d3d',
        'green-glow': '0 0 20px rgba(16, 185, 129, 0.15)',
      }
    },
  },
  plugins: [],
}
