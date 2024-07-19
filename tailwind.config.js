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
                coral: {
                    100: '#FFEDEE',
                    200: '#FFD4D5',
                    300: '#FFBABB',
                    400: '#FF9FA1',
                    500: '#FF6666', // Original
                    600: '#E65A5A',
                    700: '#CC4D4D',
                    800: '#B34040',
                    900: '#993333',
                    1000: '#802626',
                },
                aqua: {
                    100: '#E0F7F9',
                    200: '#B3ECEE',
                    300: '#80DFE3',
                    400: '#4DD2D7',
                    500: '#00BFC5', // Original
                    600: '#00AAB1',
                    700: '#00959D',
                    800: '#007F89',
                    900: '#006875',
                    1000: '#005161',
                },
                goldenrod: {
                    100: '#FFF8E5',
                    200: '#FFF0B3',
                    300: '#FFE780',
                    400: '#FFDD4D',
                    500: '#FFD700', // Original
                    600: '#E6C200',
                    700: '#CCAD00',
                    800: '#B39900',
                    900: '#998400',
                    1000: '#806F00',
                },
                limeGreen: {
                    100: '#F0FFE5',
                    200: '#DFFFB3',
                    300: '#CCFF80',
                    400: '#B8FF4D',
                    500: '#99FF00', // Original
                    600: '#8AE500',
                    700: '#7BCC00',
                    800: '#6DB300',
                    900: '#5E9900',
                    1000: '#4F8000',
                },
                magenta: {
                    100: '#FFE5F2',
                    200: '#FFCCE6',
                    300: '#FFB3D9',
                    400: '#FF99CC',
                    500: '#FF66B2', // Original
                    600: '#E65AA0',
                    700: '#CC4D8D',
                    800: '#B3407A',
                    900: '#993366',
                    1000: '#802653',
                },
                greyScale: {
                    100: '#F2F2F2',
                    200: '#E0E0E0',
                    300: '#CFCFCF',
                    400: '#BFBFBF',
                    500: '#A6A6A6', // Original
                    600: '#8C8C8C',
                    700: '#737373',
                    800: '#595959',
                    900: '#404040',
                    1000: '#262626',
                },

            },



        }
    },
    plugins: [],
}

