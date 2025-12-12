/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gion-blue": "#0098DA",
        "gion-teal": "#2C6975",
        "gion-seafoam-green": "#5FA8A3",
        "gion-powder-blue": "#CAEAF0",
        "bubbles": "#e6fbff",
        "japanese-indigo": "#1c4149",
      },
      boxShadow: {
        "custom-shadow": `-20px 18px 23px 0px rgba(0, 0, 0, 0.1), 
                            -18px 15px 20px 0px rgba(0, 0, 0, 0.06), 
                            -13px 10px 16px 0px rgba(0, 0, 0, 0.20), 
                            -8px 7px 10px 0px rgba(0, 0, 0, 0.14), 
                            -2px 1px 10px 0px rgba(0, 0, 0, 0.19), 
                            0px 4px 6px 0px rgba(0, 17, 24, 0.20)`,
        "custom-shadow-big": `-285px 169px 93px 0px rgba(0, 0, 0, 0.01), 
                            -183px 108px 85px 0px rgba(0, 0, 0, 0.04), 
                            -103px 61px 72px 0px rgba(0, 0, 0, 0.15), 
                            -46px 27px 53px 0px rgba(0, 0, 0, 0.26), 
                            -11px 7px 29px 0px rgba(0, 0, 0, 0.29)`,
      },
      fontFamily: {
        doodle: ['"Rubik Doodle Shadow"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backdrop-blur': {
          '-webkit-backdrop-filter': 'blur(10px)', // Explicit iOS fallback
          'backdrop-filter': 'blur(10px)',
        },
      });
    },
  ],
};
