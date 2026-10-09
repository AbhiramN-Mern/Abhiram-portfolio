/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#0D0C0B',
        surface: '#161514',
        primary: '#EDE8E1',
        secondary: '#9C9589',
        accent: {
          DEFAULT: '#EDE8E1',
          hover: '#FFFFFF',
        },
        terracotta: {
          DEFAULT: '#EDE8E1',
          hover: '#FFFFFF',
        },
        border: '#24221F',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        container: '1160px',
      },
    },
  },
  plugins: [],
}
