import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchEmAll } from '../../utils/PokemonFetch/PokemonFetch.js'
import { apiLink } from '../../data/Api/Api.js'
import PokeLogo from '../../assets/img/pokeLogo.png'
import BackLogo from '../../assets/img/back.svg'
import Mode from '../../assets/img/mode.svg'
import TypeColor from '../TypeColor/TypeColor.jsx'

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
      <div className="relative">
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
        <div className="flex flex-col bg-pokemonBgText mt-64 pl-4 w-80 ml-auto mr-auto h-44 border-none rounded-2xl ">
          <img
            src={pokemonItem.sprites.other.dream_world.front_default}
            alt=""
            className=" max-h-56 absolute top-1/3 -translate-x-1/2  left-1/2"
          />
        </div>
        <h2 className="text-center mt-12 text-4xl text-pokemonBgText font-black [-webkit-text-stroke-width:0.06em] [-webkit-text-stroke-color:#2c72b8] ">
          <span className="mr-3">#{pokemonItem.id}</span>
          {pokemonItem.name}
        </h2>
        <div className="flex justify-around mt-12">
          {pokemonItem.types.map(type => (
            <TypeColor key={type.type.name} type={type.type.name} className={`bg-${type.type.name} text-2xl`}>
              {type.type.name}
            </TypeColor>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PokemonDetails
