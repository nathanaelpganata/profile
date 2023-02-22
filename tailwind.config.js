const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Poppins", fontFamily.sans],
                secondary: ["Inter", fontFamily.sans],
            },
        },
    },
    plugins: [
        // ...
        require("tailwind-scrollbar"),
    ],
};
