import { useState } from "react";
import Movie from "../components/movie";
import NomineeList from "./NomineeList";
import { useStyles } from "../styles";
import { Container, Grid, Typography, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
// import uniqId from 'uniqid'

const MovieList = ({ movieData }) => {
  const [nomineeList, addNominee] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [snackBar, openSnackBar] = useState(false);

  const handleClick = (movie) => {
    // setButtonState(!buttonState);
    openSnackBar(true);
    nomineeList.length < 5 //Show banner when user reached 5 nominations
      ? addNominee((oldList) => [
          ...oldList,
          { title: movie.Title, key: movie.imdbID },
        ])
      : openSnackBar(false);
    // console.log(nomineeList.map((li) => li.key === movie.imdbID));
    nomineeList.map((li) =>
      li.key === movie.imdbID
        ? setButtonState(!buttonState)
        : console.log("null")
    );
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
      <Container className={classes.movieList} maxWidth="lg">
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
                <Grid key={movie.imdbID} item xs={12} sm={6} lg={3}>
                  <Movie
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    handleClick={() => handleClick(movie)}
                    buttonState={nomineeList.map(
                      (li) => li.key === movie.imdbID
                    )}
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
