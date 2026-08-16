/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary)',
                'primary-hover': 'var(--primary-hover)',
                'accent': 'var(--accent)',
                'accent-hover': 'var(--accent-hover)',
                'background-darker': 'var(--background-darker)',
                'background-dark': 'var(--background-dark)',
                'background': 'var(--background)',
                'surface-dark': 'var(--surface-dark)',
                'surface': 'var(--surface)',
                'surface-light': 'var(--surface-light)',
                'surface-glass': 'var(--surface-glass)',
                'surface-border': 'var(--surface-border)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-tertiary': 'var(--text-tertiary)',
            }
        },
    },
    plugins: [],
}