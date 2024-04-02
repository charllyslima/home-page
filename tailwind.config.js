/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx,scss}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            screens: {},
            colors: {
                "anti-flash-white": "#f3f6f6",
                "silver": "#c0c0c0",
                "ash-gray": "#AEC3B0",
                "air-force-blue": "#598392",
                "hookers-green": "#608485",
                "payne-s-grey": "#44566C",
                "outer-space": "#4C5A5E",
                "silver-200": "#BBC6C9",
                "midnight-green": "#124559",
                "gunmetal": "#23353A",
                "powder-blue": "#A4B4CC",
                "eerie-black": "#1D1D1D",
                "rich-black": "#01161E",
            }

        }
    },
    plugins: [],
}

