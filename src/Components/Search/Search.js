import React, {useState} from "react";

export default function Search() {

  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    
   

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9eae48419c789596b48dfdb7944f3050&language=en-US&query=${query}&page=1&include_adult=false`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    }catch(error){
        console.error(error)
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="locking for.."
          value={query} onChange={(e)=>setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
        <div className="card-list" >
            {movies.map(movie => (
            <div className="card" key={movie.id}>
                <img className="card --image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>
                alt={movie.title + ' poster'}
            </div>
            ))}
        </div>

    </div>
  );
}
