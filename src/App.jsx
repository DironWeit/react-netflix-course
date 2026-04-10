import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { MOVIES } from "./movies.data";

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const movies = MOVIES.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase())) 
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img
          src="/netflix.png"
          alt="Netflix"
          className="h-8 w-auto"
        />

        <input type="search" value={searchTerm} onChange={e => {
          setSearchTerm(e.target.value)
        }} placeholder="search" className="border-white-15 px-2 py-2 rounded outlane-0"/>
      </header>
      <main className="flex gap-6">
        {movies.length ? movies.map(movie =>
            <MovieCard key= {movie.name} image={movie.image} rating={movie.rating} />
          ): <p>Нет фильмов по этому поиску!</p>}

      </main>
    </div>
  )
}
export default App