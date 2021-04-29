const Form = ({ handleChange }) => {
  return (
    <div>
      <form action="get">
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Form;
