module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        purpleD: {
          '50': '#fef2ff',
          '100': '#fee3ff',
          '200': '#fdc6ff',
          '300': '#ff9afe',
          '400': '#ff5efc',
          '500': '#fb22ff',
          '600': '#e601f8',
          '700': '#c400ce',
          '800': '#b100b8',
          '900': '#860788',
          '950': '#5c005e',
        },
        blueD: {
          '50': '#f0fbf9',
          '100': '#d8f5f4',
          '200': '#b6ebe9',
          '300': '#77d8d5',
          '400': '#4bc5c3',
          '500': '#2fabab',
          '600': '#2a8b90',
          '700': '#287076',
          '800': '#285d62',
          '900': '#254e54',
          '950': '#143338',
        },
        orangeD: {
          '50': '#fff8ec',
          '100': '#fff0d3',
          '200': '#ffdda5',
          '300': '#ffc36d',
          '400': '#ff9e32',
          '500': '#ff800a',
          '600': '#ff6700',
          '700': '#cc4902',
          '800': '#a1390b',
          '900': '#82310c',
          '950': '#461604',
        },


      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}