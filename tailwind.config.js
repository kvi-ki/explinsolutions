/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"]
      },
      fontSize: {
        mdPreamble: 'clamp(0.6rem, 0.8rem + 1vw, 3rem)'
      },
      spacing: {
        topSpacing: 'clamp(24rem, 25rem + 1vw, 30rem)'
      }
    },
    colors: {
      green: '#7DBB4B',
      gray: '#4D4E4D',
      white: '#FFFFFF'
    },
    fontSize: {
      header: '2rem',
      headerMd: '2.5rem',
      headerLg: '3.5rem',
      headerXl: '5rem',
    }
  },
  plugins: []
}
