import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './shared/Home/Home.jsx'
import PokemonList from './shared/PokemonList/PokemonList.jsx'
import PokemonDetails from './components/PokemonDetails/PokemonDetails.jsx'
import TypeList from './shared/TypeList/TypeList.jsx'

function App() {
  return (
    <main className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/details/:id" element={<PokemonDetails />} />
        <Route path="/types" element={<TypeList />} />
      </Routes>
    </main>
  )
}

export default App
