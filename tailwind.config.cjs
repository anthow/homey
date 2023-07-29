/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {

        'vert-clair': '#d9e9e9',
        'vert-fonce': '#b3bfa9',
        'rouge-clair': '#FFEEE6',
        'rouge-fonce' :'#F9C4AB',
        'jaune-clair' : '#FFF1D8',
        'jaune-fonce' : '#FEBD5B',
      }
    }
  },
  plugins: []
};