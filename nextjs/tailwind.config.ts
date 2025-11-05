import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['36px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        "primary": "#040404",
        "secondary": "#f8f8f8",
        "slate-gray": "#6D6D6D",
        "logo-white": "#f8f8f8",
        "logo-purple": "#3c1066",
        "logo-purple-sec": "#53159b",
        "logo-purple-400": "rgba(60, 16, 102, 0.8)",
        "logo-yellow": "#ffc200",
        "logo-yellow-900": "#a17a00",
        "logo-yellow-300": "rgba(255, 194, 0, 0.7)",
        "logo-yellow-op-8": "rgba(255, 194, 0, 0.8)",
        "logo-yellow-op-9": "rgba(255, 194, 0, 0.9)",
        "logo-yellow-sec": "#efdd00",
        "logo-black": "#262626",
        "black-op": "rgba(4,4,4,0.7)",
        "navbar-gray": "rgba(239, 239, 239, 1)",
        "red": "#B8001F",
        "black": "#080808",
        "white": "#efefef",
        "gold": "#ffc100"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'inset-gray': 'inset 0px 128px 72px 0px rgba(38,38,38,1);',
        'inset-black': 'inset 0px 128px 72px 48px rgba(8,8,8,1);',
        'inset-md-bottom': 'inset 0px -112px 48px 0px rgba(38,38,38,1);',
        'inset-black-bottom': 'inset 0px -24px 12px 0px rgba(8,8,8,1);'
      },
      backgroundImage: {
        'footer': "url('/images/poly-grid-black.svg')",
        'footer-poly-mobile': "url('/images/poly-black-mobile.svg')",
        'hero': "url('/images/sebo_squat_darken.png')",
        'story': "url('/images/story.png')",
        'mission2': "url('/images/hype.png')",
        'mission': "url('/images/Jakov_Mrso.jpg')",
        'vision': "url('/images/tara_deadlift.png')",
        'group': "url('/images/group-photo.jpg')",
        "resilience": "url('/images/Resilience.jpg')",
        "support": "url('/images/Support.jpg')",
        "integrity": "url('/images/Integrity.jpg')",
        "health": "url('/images/Health.jpg')",
        "join": "url('/images/Clanovi Powerlifting kluba Galacticos2.jpg')",
        "icon": "url('/images/icon-bg.png')"
      },
      screens: {
        "wide": "1440px"
      },
      "spacing": {
        "1440": "1440px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
} satisfies Config;
