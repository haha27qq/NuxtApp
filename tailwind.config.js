/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/Navbar.vue",
        "./pages/Skills.vue",
        "./pages/Desc.vue",
        "./pages/index.vue",
        "./pages/Contact.vue",
        "./app.vue",
    ],
    theme: {
        extend: {
            screens: {
                sm: { min: "300px", max: "800px" },
                // => @media (min-width: 640px and max-width: 767px) { ... }
            },
            fontFamily: {
                ship: ["Shippori Antique", "sans-serif"],
            },
            colors: {
                "nav-color": "D6E8EE",
            },
        },
    },
    plugins: [],
};
