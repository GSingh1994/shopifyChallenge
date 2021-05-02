import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles";

const Form = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.textField}
        onSubmit={(e) => e.preventDefault}
        onChange={handleChange}
        fullWidth
        placeholder="search for a movie"
        variant="outlined"
      />
    </>
  );
};

export default Form;
