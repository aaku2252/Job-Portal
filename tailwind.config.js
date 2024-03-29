/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "media",
    content: ["./src/**/*.{html,ejs}", "node_modules/preline/dist/*.js"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
