/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gion-blue": "#0098DA",
        "gion-teal": "#2C6975",
        "gion-seafoam-green": "#5FA8A3",
      },
      boxShadow: {
        "custom-shadow": `-87px 49px 51px 0px rgba(0, 0, 0, 0.2), 
                            -57px 22px 20px 0px rgba(0, 0, 0, 0.06), 
                            -28px 21px 16px 0px rgba(0, 0, 0, 0.20), 
                            -12px 10px 15px 0px rgba(0, 0, 0, 0.34), 
                            -2px 1px 10px 0px rgba(0, 0, 0, 0.39), 
                            0px 4px 6px 0px rgba(0, 17, 24, 0.30)`,
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
