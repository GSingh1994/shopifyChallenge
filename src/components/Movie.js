// import { useState } from "react";
import { useStyles } from "../styles";

import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const Movie = ({ title, year, poster, handleClick, disabled }) => {
  const classes = useStyles();
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
              // disabled={disabled.lenght ? true : false}
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
