import React, { useEffect, useState } from 'react'

function PokemonItem({ pokemon }) {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch(pokemon.url)
      .then(response => {
        if (!response.ok) {
          throw new Error('something went wrong in url fetch!')
        }
        return response.json()
      })
      .then(response => setPokemons(response))
  }, [])

  if (!pokemons.sprites) {
    return <p>is Loading....</p>
  }

  console.log(pokemons)

  return (
    <div className="w-40 m-auto bg-pokemonBgText border-none rounded-2xl flex flex-col">
      <img src={pokemons.sprites.other.dream_world.front_default} alt="" className="max-h-28 " />
      <div className="bg-white border-b-white rounded-b-2xl flex justify-around gap-10">
        <h2>{pokemon.name}</h2>
        <p>#{pokemons.id}</p>
      </div>
    </div>
  )
}

export default PokemonItem
