/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF9F6',
        surface: '#ffffff',
        'surface-soft': '#F3F1EC',
        dark: '#141211',
        'dark-surface': '#1E1D1B',
        'dark-line': '#2E2C29',
        text: '#1A1917',
        muted: '#6B6560',
        'muted-light': '#9B9590',
        line: '#E8E4DE',
        'line-strong': '#D4CFC7',
        accent: '#9E7C5B',
        'accent-light': '#C4A882',
        'accent-dark': '#7A5F44',
        success: '#3D7A56',
        error: '#A63D33',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
        content: '760px',
        legal: '860px',
      },
      borderRadius: {
        card: '16px',
        'card-sm': '10px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,.06)',
        'card-hover': '0 16px 48px rgba(0,0,0,.10)',
        glow: '0 0 60px rgba(158,124,91,.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'slide-in-right': 'slide-in-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
