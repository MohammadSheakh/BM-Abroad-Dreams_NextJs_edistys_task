/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",

        // for flowbite
        "./node_modules/flowbite-react/lib/**/*.js",
    ],
    theme: {
        extend: {},
        colors: {
            mainBackgroundColor: "#F4F8FF",
        },
    },
    plugins: [require("flowbite/plugin")],
};
