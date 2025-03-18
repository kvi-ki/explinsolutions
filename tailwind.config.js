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
        heading: 'clamp(1.2rem, 2.5% + 1vw, 4rem)',
        mdPreamble: 'clamp(0.6rem, 0.8rem + 1vw, 3rem)',
        description: 'clamp(0.8rem, 1.1rem + 1vw, 1.8rem)'
      },
      spacing: {
        topSx: 'clamp(11.3rem, 1.5% + 1vw, 14rem)',
        topSm: 'clamp(12rem, 1.5% + 1vw, 14rem)',
        topMd: 'clamp(16rem, 2.5% + 1vw, 23rem)',
        topLg: 'clamp(24rem, 2.5% + 1vw, 25rem)',
        topXl: 'clamp(25rem, 5% + 1vw, 26rem)',
        rightSx: 'clamp(1rem, 1% + 1vw, 1rem)',
        rightSm: 'clamp(1.5rem, 1% + 1vw, 7rem)',
        rightMd: 'clamp(2rem, 2% + 3vw, 10rem)',
        rightLg: 'clamp(12rem, 2% + 1vw, 24rem)',
        rightXl: 'clamp(4rem, 2% + 3vw, 14rem)',
      }
    },
    colors: {
      green: '#7DBB4B',
      //gray: '#4D4E4D',
      gray: '#696969',
      white: '#FFFFFF',
      black: '#000000'
    },
    fontSize: {
      header: '2rem',
      sectionHeader: '1.125rem',
      sectionHeaderMd: '1.5rem',
      sectionHeaderLg: '1.8rem'
    }
  },
  plugins: []
}
