const NomineeList = ({ nomineeList }) => {
  console.log(nomineeList);
  return (
    <div>
      {nomineeList.map((movie) => (
        <div key={movie.key}>{movie.title}</div>
      ))}
    </div>
  );
};

export default NomineeList;
