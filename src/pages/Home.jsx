import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const[movies, setMovies]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/movies`)
    .then((r)=>r.json())
    .then((data)=>{setMovies(data)

    })
.catch((err) => console.error("Fetch error:", err));
  },[])

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Info goes here! */}
        <h1> Home Page</h1>
        {Array.isArray(movies) && movies.map((movie)=>
        <MovieCard key= {movie.id} id={movie.id} title={movie.title} time={movie.time} genre={movie.genre} />
        )}
      </main>
    </>
  );
};

export default Home;
