/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gion-blue": "#0098DA",
      },
      boxShadow: {
        "custom-shadow": `-27px 29px 11px 0px rgba(0, 0, 0, 0.01), 
                            -17px 19px 10px 0px rgba(0, 0, 0, 0.06), 
                            -10px 11px 9px 0px rgba(0, 0, 0, 0.20), 
                            -4px 5px 6px 0px rgba(0, 0, 0, 0.34), 
                            -1px 1px 4px 0px rgba(0, 0, 0, 0.39), 
                            0px 4px 6px 0px rgba(0, 17, 24, 0.30)`,
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
