import React from 'react'
import { Link } from 'react-router-dom'
import PokeLogo from '../../assets/img/pokeLogo.png'
import Pika from '../../assets/img/pika.png'

function Home() {
  return (
    <section className="bg-pokemonBg h-screen relative flex flex-col align-middle font-RobotoBold ">
      <img src={PokeLogo} alt="" className="absolute top-5 left-20" />
      <h1 className="text-pokemonText text-3xl mt-60 text-center">
        Click the button to get to <span>Catch' em all</span>
      </h1>
      <Link to="/pokemon">
        <div className="text-pokemonText border-pokemonText rounded-3xl border-2 pl-20 pr-20 pb-3 pt-3 max-w-fit bg-pokemonBgText text-2xl ml-auto mr-auto mt-10">
          Catch' Em All
        </div>
      </Link>
      <img src={Pika} alt="" className="absolute bottom-12" />
    </section>
  )
}

export default Home
