const MovieList = ({ movieData }) => {
  return (
    <div>
      <ul>
        {movieData ? (
          movieData.map((movie, i) => <li key={i}>{movie.Title}</li>)
        ) : (
          <li>No results found 🤔</li>
        )}
      </ul>
    </div>
  );
};

export default MovieList;
