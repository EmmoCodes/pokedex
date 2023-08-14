import React, { useEffect, useState } from 'react'
import PokeLogo from '../../assets/img/pokeLogo.png'
import BurgerMenu from '../../assets/img/burgerMenu.svg'
import Mode from '../../assets/img/mode.svg'
import { fetchEmAll } from '../../utils/PokemonFetch/PokemonFetch.js'
import { apiLink } from '../../data/Api/Api.js'
import PokemonItem from '../../components/PokemonItem/PokemonItem.jsx'
import { Link } from 'react-router-dom'

function PokemonList() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchEmAll(`${apiLink}/pokemon?limit=151`, setPokemons, 'results')
  }, [])

  console.log(pokemons)

  return (
    <section className="bg-pokemonBg ">
      <img src={PokeLogo} alt="" className="absolute top-5 left-20" />
      <Link to="/types">
        <img src={BurgerMenu} alt="" className="absolute top-32 left-8 pt-0.5" />
      </Link>
      <img src={Mode} alt="" className="absolute top-32 right-8" />
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Search Pokemon"
        className="absolute top-32 left-1/4 mt-0.5  rounded-3xl placeholder:pl-3 w-1/2 bg"
      />
      <article className="pt-52 gridOwn relative">
        {pokemons.map(pokemon => (
          <PokemonItem key={pokemon.url} pokemon={pokemon} />
        ))}
      </article>
    </section>
  )
}

export default PokemonList
