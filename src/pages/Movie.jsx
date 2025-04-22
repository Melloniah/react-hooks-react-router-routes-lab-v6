import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";


function Movie() {
const {id}=useParams();
const [movie, setMovie]=useState(null)


useEffect(()=>{
  fetch(`http://localhost:4000/movies/${id}`)
  .then((r)=>r.json())
  .then((data)=>{
     
    setMovie(data)
  })
  .catch((err) => console.error("Fetch error:", err));

},[id])


if(!movie){
  return <h3> Loading, please wait..</h3>
}
  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
      
        <MovieCard key= {movie.id} id={movie.id} title={movie.title} time={movie.time} genre={movie.genre} />
        <h1>  {movie.title}|</h1>
        <p> Time: {movie.time} minutes </p>
        <div>
          {movie.genres.map((genre, id)=>(
             <span key={id}>{genre}</span>
          ))}
        </div>
        
       
        
      </main>
    </>
  );
};

export default Movie;
