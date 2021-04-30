import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: 255,
    width: 255,
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
  },
  year: {
    // marginLeft: "auto",
  },
  btn: {
    margin: "0 auto",
    marginTop: 10,
  },
});
const Movie = ({ title, year, poster, handleClick }) => {
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardContent>
          <CardMedia className={classes.media} title={poster} image={poster} />
          <Typography
            align="center"
            className={classes.title}
            variant="body1"
            color="initial"
          >
            {title}
          </Typography>
          <Typography align="center" variant="body2" color="textSecondary">
            {year}
          </Typography>
          <CardActions>
            <Button
              className={classes.btn}
              onClick={handleClick}
              variant="contained"
              color="primary"
            >
              Nominate
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default Movie;
