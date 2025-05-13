/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"]
      },
      fontSize: {
        ...require('tailwindcss/defaultTheme').fontSize,
        smallFontSize: ['0.875rem', { lineHeight: '1.25rem' }],
        baseFontSize: ['1rem', { lineHeight: '1.5rem' }],
        largeFontSize: ['1.5rem', { lineHeight: '2rem' }],
      },
      fontWeight: {
        extraLightWeight: '200',
        lightWeight: '300'
      }
    },
    colors: {
      green: '#7DBB4B',
      darkGray: '#4D4E4D',
      gray: '#696969',
      lightGray: '#F2F4F3',
      white: '#FFFFFF',
      black: '#000000',
      textRed: '#ff0000'
    },
    fontSize: {}
  },
  plugins: [],
}
