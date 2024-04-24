/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                softGreen: '#E8EBE0',
                primaryGreen: '#7B7C4E',
                darkGreen: '#41461B',
                backGreen: '#7A7C4D',
                beige: '#FCFCFC',
                lavender: '#783D82'
            },
            grayscale: {
                50: '50%'
            },

            fontFamily: {
              theSeasons: 'TheSeasons'
            }
        },
    },
    plugins: [],
}


// Verdes claros:
/**
#F6F8EE
#E0E6CC

Verdes intermedios:
#B2BB91
#7B7C4E

Verde oscuro:
#41461B

Color arena: 
#EAE3E2

Lavanda:
#783D82
 */