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
                gunmetal: {
                    100: '#E0E1E5',
                    200: '#C2C4CB',
                    300: '#A4A7B0',
                    400: '#868994',
                    500: '#30343F', // Original
                    600: '#2A2D38',
                    700: '#232630',
                    800: '#1C1F28',
                    900: '#151720',
                    1000: '#0E0F18',
                },
                ghostWhite: {
                    100: '#FFFFFF',
                    200: '#FEFEFF',
                    300: '#FDFDFF',
                    400: '#FCFCFF',
                    500: '#FAFAFF', // Original
                    600: '#E1E1E6',
                    700: '#C8C8CC',
                    800: '#AFAFB3',
                    900: '#969699',
                    1000: '#7D7D80',
                },
                periwinkle: {
                    100: '#FBF9FF',
                    200: '#F6F3FF',
                    300: '#F2EDFF',
                    400: '#EDE7FF',
                    500: '#E4D9FF', // Original
                    600: '#CDBFFF',
                    700: '#B6A5FF',
                    800: '#9F8BFF',
                    900: '#8871FF',
                    1000: '#7157FF',
                },
                delftBlue: {
                    100: '#D3D7E4',
                    200: '#A7AFC8',
                    300: '#7A88AD',
                    400: '#4E6091',
                    500: '#273469', // Original
                    600: '#232F5F',
                    700: '#1F2A55',
                    800: '#1A244B',
                    900: '#161F41',
                    1000: '#111937',
                },
                spaceCadet: {
                    100: '#D1D2DC',
                    200: '#A4A5BA',
                    300: '#787897',
                    400: '#4B4B75',
                    500: '#1E2749', // Original
                    600: '#1B233F',
                    700: '#181F35',
                    800: '#151B2B',
                    900: '#121721',
                    1000: '#0F1217',
                },




                "anti-flash-white": "#f3f6f6",
                "silver": "#c0c0c0",
                "air-force-blue": "#598392",
                "hookers-green": "#608485",
                "payne-s-grey": "#44566C",
                "outer-space": "#4C5A5E",
                "silver-200": "#BBC6C9",
                "midnight-green": "#124559",
            }

        }
    },
    plugins: [],
}

