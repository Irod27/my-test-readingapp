
/* 反映されない？ */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beige: "#FFF7EC",
                green: "#87CB71",
                lightGreen: "#D5E691",
                lightGray: "#B2B2B2",

            },
        },
    },
    plugins: [],
}
