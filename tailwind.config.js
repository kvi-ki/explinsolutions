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
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    colors: {
      green: '#7DBB4B',
      gray: '#4D4E4D',
      white: '#FFFFFF'
    },
    fontSize: {
      header: '2rem',
    }
  },
  plugins: []
}
