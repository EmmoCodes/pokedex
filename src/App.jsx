import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './shared/Home/Home.jsx'
import PokemonList from './shared/PokemonList/PokemonList.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
      </Routes>
    </>
  )
}

export default App
