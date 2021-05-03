import { useStyles } from "../styles";

import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const Movie = ({ title, year, poster, handleClick, clickedMovie }) => {
  const classes = useStyles();

  let disabled = false;
  if (clickedMovie && clickedMovie.title === title) {
    //if clicked movie's title matches title of this card, button become disabled
    disabled = true;
  }

  return (
    <>
      <Card elevation={4}>
        <CardContent
          hover="true"
          className={classes.cardContent}
          style={{ paddingBottom: 3 }}
        >
          <CardMedia className={classes.cardMedia} image={poster} />
          <div className={classes.smallCard}>
            <Typography
              gutterBottom
              align="center"
              // noWrap
              className={classes.cardTitle}
              variant="subtitle1"
            >
              {title}
            </Typography>
            <Typography align="center" variant="body2" color="textSecondary">
              {year}
            </Typography>
          </div>

          <CardActions>
            <Button
              className={classes.addNomineeBtn}
              onClick={handleClick} //Add movie to nomination list
              variant="contained"
              color="primary"
              size="small"
              disabled={disabled}
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
