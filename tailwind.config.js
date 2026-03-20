/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8F9FA',
        surface: '#FFFFFF',
        'surface-soft': '#F1F3F5',
        'surface-warm': '#F4F5F7',
        dark: '#0C0B09',
        'dark-surface': '#171614',
        'dark-line': '#2A2826',
        text: '#1A1D21',
        muted: '#6B7280',
        'muted-light': '#656D76',
        line: '#E5E7EB',
        'line-strong': '#D1D5DB',
        accent: '#4B6A8A',
        'accent-light': '#7B9BB8',
        'accent-dark': '#365272',
        'accent-glow': 'rgba(75,106,138,.08)',
        sage: '#4A7A6A',
        'sage-light': '#6B9B8A',
        success: '#4A7A6A',
        error: '#B84233',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
        content: '760px',
        legal: '860px',
      },
      borderRadius: {
        card: '20px',
        'card-sm': '12px',
      },
      boxShadow: {
        card: '0 8px 40px rgba(0,0,0,.05)',
        'card-hover': '0 20px 60px rgba(0,0,0,.10)',
        glow: '0 0 80px rgba(166,124,82,.15)',
        'glow-sm': '0 0 40px rgba(166,124,82,.08)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.88)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'draw-line': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.7s ease forwards',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
