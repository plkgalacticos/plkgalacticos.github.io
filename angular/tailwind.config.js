/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
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
        "logo-yellow-300": "rgba(255, 194, 0, 0.7)",
        "logo-yellow-op-8": "rgba(255, 194, 0, 0.8)",
        "logo-yellow-op-9": "rgba(255, 194, 0, 0.9)",
        "logo-yellow-sec": "#efdd00",
        "logo-black": "#262626",
        "black-op": "rgba(4,4,4,0.7)",
        "navbar-gray": "rgba(239, 239, 239, 1)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'footer': "url('assets/images/footer/world-map-circle.png')",
        'footer-poly': "url('assets/images/footer/poly-black.svg')",
        'footer-poly-mobile': "url('assets/images/footer/poly-black-mobile.svg')",
        'hero': "url('assets/images/home/sebo_squat_darken.png')",
        'story': "url('assets/images/story.png')",
        'mission': "url('assets/images/hype.png')",
        'vision': "url('assets/images/tara_deadlift.png')",
        'group': "url('assets/images/group-photo.jpg')",
      },
      screens: {
        "wide": "1440px"
      },
      "spacing": {
        "1440": "1440px"
      }
    },
  },
  plugins: [],
}

