import { useStyles } from "../styles";

import TextField from "@material-ui/core/TextField";

const Form = ({ handleChange }) => {
  const handleSubmit = (e) => {
    this.blur(); //Hide android keyboard on submit
    e.preventDefault();
  };

  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.textField}
        onSubmit={() => handleSubmit}
        onChange={handleChange}
        fullWidth
        placeholder="search for a movie"
        variant="outlined"
        autoFocus
      />
    </>
  );
};

export default Form;
