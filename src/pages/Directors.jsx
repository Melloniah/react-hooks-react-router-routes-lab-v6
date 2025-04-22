import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/directors`)
    .then((r)=>r.json())
    .then((data)=>{
      setDirectors(data)
    })
    .catch((err) => console.error("Fetch error:", err));
  },[])

  if(!directors.length){
    return <h3> Loading, please wait..</h3>
  }
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Director info here! */}
        <h1> Directors Page</h1>
        {directors.map((director)=>(
          <article key={director.id}> 
          <h2>{director.name}</h2>
          <h3>Movies:</h3>
          <ul>
            {director.movies.map((movie, index)=>(
               <li key={index}>{movie}</li>
            ))}
          </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
