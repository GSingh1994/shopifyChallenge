import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: 20,
    // zIndex: 3,
  },
  input: {
    margin: "8rem 0 3rem 0",
    // [theme.breakpoints.down("xs")]: {
    //   width: "20rem",
    // },
  },
  title: { margin: "2rem 0" },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - 240px)`,
      marginRight: 240,
    },
  },
}));

const Form = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <>
      {/* <AppBar className={classes.appBar} position="fixed" color="primary">
        <Typography className={classes.title} variant="h6" align="center">
          The Shoppies: Movie awards for entrepreneurs
        </Typography>
      </AppBar> */}
      <TextField
        className={classes.input}
        onSubmit={handleSubmit}
        fullWidth={true}
        placeholder="search for a movie"
        onChange={handleChange}
        variant="outlined"
      />
    </>
  );
};

export default Form;
