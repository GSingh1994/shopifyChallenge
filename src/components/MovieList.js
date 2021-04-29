import React, { useState } from "react";
import Movie from "../components/movie";
import uniqid from "uniqid";
import NomineeList from "./NomineeList";

const MovieList = ({ movieData }) => {
  const [nomineeList, addNominee] = useState([]);
  const handleClick = (movie) => {
    addNominee((oldList) => [...oldList, movie.Title]);
  };
  return (
    <div>
      {movieData ? (
        movieData.map((movie) => (
          <Movie
            key={uniqid()}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            handleClick={() => handleClick(movie)}
          />
        ))
      ) : (
        <div>No results found 🤔</div>
      )}
      <NomineeList nomineeList={nomineeList} />
    </div>
  );
};

export default MovieList;
