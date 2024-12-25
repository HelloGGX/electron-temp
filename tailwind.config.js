/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
        },
        primary: {
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        blue: {
          200: "var(--color-blue-200)",
          400: "var(--color-blue-400)",
          600: "var(--color-blue-600)",
        },
        green: {
          400: "var(--color-green-400)",
        },
        purple: {
          400: "var(--color-purple-400)",
        },
        orange: {
          400: "var(--color-orange-400)",
        },
      },
      fontSize: {
        50: "var(--text-size-50)",
        48: "var(--text-size-48)",
        40: "var(--text-size-40)",
        32: "var(--text-size-32)",
        28: "var(--text-size-28)",
        24: "var(--text-size-24)",
        20: "var(--text-size-20)",
      },
      fontWeight: {
        regular: "var(--text-weight-regular)",
        bold: "var(--text-weight-bold)",
        heavy: "var(--text-weight-heavy)",
      },
      fontFamily: {
        sans: ["'OPPOSams-regular'", "sans-serif"],
        "sans-bold": ["'OPPOSams-bold'", "sans-serif"],
        "sans-heavy": ["'OPPOSams-heavy'", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
