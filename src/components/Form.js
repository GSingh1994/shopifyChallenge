import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 20,
    zIndex: 3,
  },
  input: {
    marginTop: "8rem",
  },
  title: { margin: "2rem 0" },
});

const Form = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Typography className={classes.title} variant="h4" align="center">
            The Shoppies: Movie awards for entrepreneurs
          </Typography>
        </AppBar>
        <TextField
          className={classes.input}
          onSubmit={handleSubmit}
          fullWidth={true}
          placeholder="search for a movie"
          onChange={handleChange}
          variant="filled"
        />
      </Box>
    </>
  );
};

export default Form;
