import React, { useEffect, useState } from 'react'
import { itemFetch } from '../../utils/PokemonFetch/PokemonFetch.js'
import { Link } from 'react-router-dom'

function PokemonItem({ pokemon }) {
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    itemFetch(pokemon.url, setPokemons)
  }, [])

  if (!pokemons.sprites) {
    return <p>is Loading....</p>
  }

  console.log(pokemons)

  return (
    <Link to={`/details/${pokemons.id}`}>
      <div className="w-40 m-auto bg-pokemonBgText border-none rounded-2xl flex flex-col h-24 relative mb-2">
        <img src={pokemons.sprites.other.dream_world.front_default} alt="" className="h-28 relative bottom-9 " />
        <div className="bg-white border-b-white rounded-b-2xl flex justify-around gap-10 absolute top-20 w-40">
          <p>#{pokemons.id}</p>
          <h2>{pokemon.name}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PokemonItem
