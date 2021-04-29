const Form = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form action="get" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Form;
