import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchEmAll } from '../../utils/PokemonFetch/PokemonFetch.js'
import { apiLink } from '../../data/Api/Api.js'
import PokeLogo from '../../assets/img/pokeLogo.png'
import BackLogo from '../../assets/img/back.svg'
import Mode from '../../assets/img/mode.svg'

function PokemonDetails() {
  const [pokemonItem, setPokemonItem] = useState({})
  const pokemonId = useParams().id

  useEffect(() => {
    fetchEmAll(`${apiLink}/pokemon/${pokemonId}`, setPokemonItem)
  }, [])

  if (!pokemonItem.sprites) {
    return <p>is Loading....</p>
  }

  return (
    <section className="w-sc h-screen m-auto bg-pokemonBg border-none rounded-2xl flex flex-col">
      <div className="flex flex-col bg-pokemonBgText mt-64 pl-4 w-80 ml-auto mr-auto h-44 border-none rounded-2xl">
        <img src={PokeLogo} alt="" className="absolute top-5 left-20" />
        <Link to="/pokemon">
          <img src={BackLogo} alt="" className="absolute top-32 left-8" />
        </Link>
        <img src={Mode} alt="" className="absolute top-32 right-8" />
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Search Pokemon"
          className="absolute top-32 left-1/4 mt-0.5 rounded-3xl placeholder:pl-3 w-1/2 bg"
        />
        <img src={pokemonItem.sprites.other.dream_world.front_default} alt="" className="rounded-b-2xl max-h-56 " />
        <h2 className="text-center top-1/2 mt-52 text-3xl text-pokemonBgText stroke-pokemonText stroke-2">
          <span className="mr-3">#{pokemonItem.id}</span>
          {pokemonItem.name}
        </h2>
        <div className="flex justify-around mt-12">
          {pokemonItem.types.map(type => (
            <div key={type.type.name} className={`bg-${type.type.name} text-2xl`}>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PokemonDetails
