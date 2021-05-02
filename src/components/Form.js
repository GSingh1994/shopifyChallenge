import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles";

const Form = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.textField}
        onSubmit={(e) => e.preventDefault}
        fullWidth={true}
        placeholder="search for a movie"
        onChange={handleChange}
        variant="outlined"
      />
    </>
  );
};

export default Form;
