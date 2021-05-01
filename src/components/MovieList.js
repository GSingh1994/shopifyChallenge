import React, { useState } from "react";
import Movie from "../components/movie";
import uniqid from "uniqid";
import NomineeList from "./NomineeList";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      width: "23rem",
    },
  },
}));

const MovieList = ({ movieData }) => {
  const [nomineeList, addNominee] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [snackBar, openSnackBar] = useState(false);

  const handleClick = (movie) => {
    setButtonState(!buttonState);
    openSnackBar(true);
    nomineeList.length < 5 //Show banner when user reached 5 nominations
      ? addNominee((oldList) => [
          ...oldList,
          { title: movie.Title, key: uniqid() },
        ])
      : openSnackBar(false);
  };

  const handleDelete = (id) => {
    addNominee((oldList) => oldList.filter((item) => item.key !== id)); //remove nominees matching id
    // nomineeList.length <= 5 ? setButtonState(false) : console.log("null");
  };

  const handleClose = (event, reason) => {
    //Close and reset snackbar
    if (reason === "clickaway") {
      return;
    }
    openSnackBar(false);
  };
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root} maxWidth="lg">
        {nomineeList.length === 5 ? (
          <Typography variant="h3" align="center" gutterBottom color="initial">
            You've nominated 5 movies
          </Typography>
        ) : !movieData ? (
          <Typography variant="h6" color="secondary" align="center">
            No results found 🤔
          </Typography>
        ) : null}

        <Grid container spacing={4}>
          {movieData
            ? movieData.map((movie) => (
                <Grid key={uniqid()} item xs={12} sm={6} lg={3}>
                  <Movie
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    handleClick={() => handleClick(movie)}
                    buttonState={buttonState}
                    // buttonState={banner} //Disable all buttons if banner is true
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>

      <Snackbar open={snackBar} onClose={handleClose} autoHideDuration={2000}>
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Movie added for nomination
        </Alert>
      </Snackbar>

      <NomineeList nomineeList={nomineeList} handleDelete={handleDelete} />
    </>
  );
};

export default MovieList;
