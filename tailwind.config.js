const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT( {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors:{
       'some-custom-heading':'#0072F5',
       'getingstarted-hover':'#000025'
      }

    },

  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
})