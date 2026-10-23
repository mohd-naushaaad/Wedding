/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#031713',
          900: '#062821',
          850: '#082C26',
          800: '#063D32',
          700: '#0B4F42',
          600: '#116554',
          500: '#1B826D',
        },
        gold: {
          900: '#4A3B18',
          800: '#6B5420',
          700: '#8C6E2A',
          600: '#A88537',
          500: '#C6A45B', // Primary Antique Gold
          400: '#D6B772',
          300: '#E7D6A3', // Champagne Gold
          200: '#F1E4C3',
          100: '#FAF4E6',
        },
        ivory: {
          DEFAULT: '#F8F3E8',
          cream: '#EFE6D5',
          light: '#FCF9F3',
          muted: '#DED3BF',
        },
        charcoal: {
          DEFAULT: '#252720',
          light: '#3C4035',
          muted: '#5A6050',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        arabic: ['Amiri', '"Noto Naskh Arabic"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #C6A45B 0%, #F1E4C3 35%, #C6A45B 70%, #8C6E2A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C6A45B 0%, #FFF5DC 50%, #C6A45B 100%)',
        'emerald-radial': 'radial-gradient(ellipse at center, #0B4F42 0%, #063D32 50%, #031713 100%)',
        'emerald-card': 'linear-gradient(145deg, rgba(8, 44, 38, 0.95) 0%, rgba(3, 23, 19, 0.98) 100%)',
        'ivory-card': 'linear-gradient(145deg, #FCF9F3 0%, #EFE6D5 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(198, 164, 91, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(198, 164, 91, 0.4)',
        'emerald-glow': '0 10px 30px rgba(6, 61, 50, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
          '75%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
