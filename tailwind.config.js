/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "media",
    content: ["./src/**/*.{html,ejs}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), require("@tailwindcss/forms")],
    daisyui: {
        themes: ["dim", "aqua", "light"],
    },
};
