import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "8rem 0 3rem 0",
  },
  title: { margin: "2rem 0" },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - 240px)`,
      marginRight: 240,
    },
  },
}));

const Form = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.input}
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
