/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '1023px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'lg': { 'min': '1024px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      backgroundImage: {
        formImg: 'url(./assets/images/bg-shorten-mobile.svg)',
        formImgB: 'url(./assets/images/bg-shorten-desktop.svg)',
        boostImg: 'url(./assets/images/bg-boost-mobile.svg)',
        boostImgB: 'url(./assets/images/bg-boost-desktop.svg)'
      },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkV: 'hsl(257, 27%, 26%)',
        redd: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayV: 'hsl(257, 7%, 63%)',
        darkB: 'hsl(255, 11%, 22%)',
        vdarkV: 'hsl(260, 8%, 14%)',
        neww: '#e6e8eb'
      }
    },
  },
  plugins: [],
}

