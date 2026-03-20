/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fbfbfa',
        surface: '#ffffff',
        'surface-soft': '#f5f4f1',
        text: '#151515',
        muted: '#555',
        line: '#e6e3de',
        'line-strong': '#d8d3cb',
        accent: '#171717',
        success: '#1d6c3c',
        error: '#9b3127',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      maxWidth: {
        container: '1120px',
        content: '760px',
        legal: '860px',
      },
      borderRadius: {
        card: '18px',
        'card-sm': '12px',
      },
      boxShadow: {
        card: '0 12px 40px rgba(0,0,0,.05)',
      },
    },
  },
  plugins: [],
}
