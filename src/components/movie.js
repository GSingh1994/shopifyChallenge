const Movie = ({ title, year, poster, message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <h3 className="title">{title}</h3>
      <div className="year">{year}</div>
      <div className="poster">
        <img src={poster} width="100px" alt="" />
      </div>
      <button>Nominate</button>
    </div>
  );
};

export default Movie;
