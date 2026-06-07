/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        navy:   '#0A1628',
        blue:   '#1A3A5C',
        mid:    '#2D5986',
        accent: '#C8973A',
        gold:   '#E8B84B',
        cream:  '#F5F0E8',
        card:   '#FDFAF5',
        border: '#D6CCB8',
        muted:  '#6B7280',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-up-1': 'fadeUp 0.6s 0.1s ease both',
        'fade-up-2': 'fadeUp 0.6s 0.2s ease both',
        'fade-up-3': 'fadeUp 0.6s 0.3s ease both',
        'fade-up-4': 'fadeUp 0.6s 0.4s ease both',
        'fade-up-5': 'fadeUp 0.6s 0.5s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}