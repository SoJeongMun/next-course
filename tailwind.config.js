/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'event-linear': 'linear-gradient(to bottom left, steelBlue, doggerBlue)',
      },
      colors: {
        eventBg: 'steelBlue',
        eventBg2: 'rosyBrown',
      },
      screens: {
        xs: '475px',
      },
      boxShadow: {
        cardShadow: '0 1px 4px rgba(0, 0, 0, 0.2), 0 1px 12px rgba(0, 0, 0, 0.2)',
        btnShadow: '0 1px 6px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        headText: '0 3px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
