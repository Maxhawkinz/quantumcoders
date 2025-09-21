/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'barn-red': '#780000',
        'fire-brick': '#c1121f',
        'papaya-whip': '#fdf0d5',
        'prussian-blue': '#003049',
        'air-superiority-blue': '#669bbc',
        primary: {
          50: '#fdf0d5',
          100: '#f9e6c7',
          200: '#f3d9b5',
          300: '#edcc9f',
          400: '#e7bf89',
          500: '#e1b273',
          600: '#dba55d',
          700: '#d59847',
          800: '#cf8b31',
          900: '#c97e1b',
        },
        secondary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#669bbc',
          600: '#5a8bb0',
          700: '#4e7ba4',
          800: '#426b98',
          900: '#365b8c',
        },
        accent: {
          50: '#fff5f5',
          100: '#ffe5e5',
          200: '#ffcccc',
          300: '#ffb3b3',
          400: '#ff9999',
          500: '#ff8080',
          600: '#e67373',
          700: '#cc6666',
          800: '#b35959',
          900: '#994d4d',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
