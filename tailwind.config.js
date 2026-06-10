/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "gion-blue": "#0098DA",
        "gion-teal": "#2C6975",
        "gion-teal-blue": "#B2E0E0",
        "gion-teal-2": "#1A7A89",
        "gion-teal-3": "#0F6B6F",
        "gion-seafoam-green": "#5FA8A3",
        "gion-powder-blue": "#E6F4F4",
        "gion-gray": "#6C7A7D",
        bubbles: "#e6fbff",
        "japanese-indigo": "#1c4149",
        onahau: "#C1ECFF",
        "freedon-sky": "#CFF9FF",
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
        card: `
          0px 79.5828px 32.2945px rgba(0, 0, 0, 0.02), 
          0px 44.9816px 26.5276px rgba(0, 0, 0, 0.1), 
          0px 19.6074px 19.6074px rgba(0, 0, 0, 0.18), 
          0px 4.6135px 10.3804px rgba(0, 0, 0, 0.2)
        `,
      },
      fontFamily: {
        doodle: ['"Rubik Doodle Shadow"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        segoe: ['"Segoe UI"', "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        reviewCard: {
          '0%': { transform: 'rotate(14.0deg)' },
          '60%': { transform: 'rotate(76.0deg)' },
          '100%': { transform: 'rotate(14.0deg)' },
          // '30%': { transform: 'rotate(45deg)' },
          // '40%': { transform: 'rotate(22.5deg)' },
          // '50%': { transform: 'rotate(11.25deg)' },
          // '60%': { transform: 'rotate(5.625deg)' },
          // '100%': { transform: 'rotate(2.8125deg)' },
        },
      },
      animation: {
        'waving-hand': 'reviewCard 10s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".backdrop-blur": {
          "-webkit-backdrop-filter": "blur(10px)", // Explicit iOS fallback
          "backdrop-filter": "blur(10px)",
        },
      });
    },
  ],
};
