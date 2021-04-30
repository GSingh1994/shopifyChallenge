import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  input: {
    // width: "50rem",
    // color: "green",
    // margin: "0 auto",
  },
});
const Form = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form action="get" onSubmit={handleSubmit}>
        <TextField
          fullWidth="true"
          className={classes.input}
          placeholder="search for a movie"
          onChange={handleChange}
          variant="filled"
        />
      </form>
    </div>
  );
};

export default Form;
