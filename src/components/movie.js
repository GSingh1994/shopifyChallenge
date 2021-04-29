const Movie = ({ title, year, poster, handleClick }) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      <div className="year">{year}</div>
      <div className="poster">
        <img src={poster} width="100px" alt="" />
      </div>
      <button onClick={handleClick}>Nominate</button>
    </div>
  );
};

export default Movie;
