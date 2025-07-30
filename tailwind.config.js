/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Make sure this is included
    ],
    theme: {
        extend: {
            colors: {
                'mango-orange': '#F9B143',
            },
        },
    },
    plugins: [],
}