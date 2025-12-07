/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Technical Palette
        zinc: {
          850: '#1f2937', // Deep matte grey
          900: '#18181b', // Base dark
          950: '#09090b', // Almost black
        },
        // Accent: International Orange (Arc'teryx style)
        accent: {
          400: '#fb923c', 
          500: '#f97316',
          600: '#ea580c',
        }
      },
      letterSpacing: {
        'tightest': '-0.02em',
        'widest-xl': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}