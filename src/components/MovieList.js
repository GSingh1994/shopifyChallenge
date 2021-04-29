import Movie from "../components/movie";
import uniqid from "uniqid";
const MovieList = ({ movieData }) => {
  return (
    <div>
      {movieData ? (
        movieData.map((movie) => (
          <Movie
            key={uniqid()}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))
      ) : (
        <Movie message="No results found 🤔" />
      )}
    </div>
  );
};

export default MovieList;
