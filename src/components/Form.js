import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "40rem",
    color: "green",
  },
});
const Form = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form action="get" onSubmit={handleSubmit}>
        <Input
          placeholder="search for a movie"
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
      </form>
    </div>
  );
};

export default Form;
