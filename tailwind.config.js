/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pokemonBg: '#CCDADD',
        pokemonText: '#2C72B8',
        pokemonBgText: '#FFCB05',
        bug: '#3BB900',
        dark: '#1C1C1C',
        dragon: '#00458A',
        electric: '#FFE600',
        fairy: '#FFC2F9',
        fighting: '#E40000',
        fire: '#FF9900',
        flying: '#CCDADD',
        ghost: '#5A1E64',
        grass: '#57921C',
        ground: '#965A00',
        ice: '#6AD2FF',
        normal: '#B3B3B3',
        plant: '#70DF00',
        poison: '#AB00AE',
        psychic: '#FF81F2',
        rock: '#E1B237',
        steel: '#2A4950',
        water: '#00A0E4',
      },
      fontFamily: {
        Roboto: ['Roboto'],
        RobotoBold: ['RobotoBold'],
      },
      gridOwn: {
        gridOwn: ['gridOwn'],
      },
    },
  },
  plugins: [],
}
