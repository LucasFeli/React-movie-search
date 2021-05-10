import React from "react";

export default function Search() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "Harry Potter";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9eae48419c789596b48dfdb7944f3050&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
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
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
