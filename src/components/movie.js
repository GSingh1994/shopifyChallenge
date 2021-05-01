import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 4,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  media: {
    minHeight: 255,
    minWidth: 255,
  },
  title: {
    fontWeight: "bold",
    padding: "10px 5px",
  },
  btn: {
    margin: "0 auto",
  },
}));
const Movie = ({ title, year, poster, handleClick }) => {
  const [button, setButton] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Card elevation={4}>
        <CardContent
          hover="true"
          className={classes.root}
          style={{ paddingBottom: 3 }}
        >
          <CardMedia className={classes.media} image={poster} />

          <Typography
            align="center"
            noWrap
            className={classes.title}
            variant="body1"
          >
            {title}
          </Typography>

          <Typography align="center" variant="body2" color="textSecondary">
            {year}
          </Typography>

          <CardActions>
            <Button
              className={classes.btn}
              onClick={handleClick} //Add movie to nomination list
              variant="contained"
              color="primary"
              // disabled={buttonState ? true : false}
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
