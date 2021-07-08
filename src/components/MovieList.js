import { useStyles } from "../styles";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import NomineeList from "./NomineeList";
import {
  Grid,
  Typography,
  Snackbar,
  useMediaQuery,
  Grow,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import uniqId from "uniqid";

const MovieList = ({ movieData }) => {
  const [nomineeList, addNominee] = useState([]);
  const [snackBar, openSnackBar] = useState(false);

  const handleClick = (movie) => {
    if (nomineeList.length < 5) {
      addNominee((oldList) => [
        ...oldList,
        { title: movie.Title, key: uniqId(), id: movie.imdbID },
      ]);
    }
    openSnackBar(true);
  };

  useEffect(() => {
    //getting saved local storage on first render
    let savedList = JSON.parse(localStorage.getItem("movies" || "[]"));
    if (savedList) {
      addNominee(savedList);
    }
  }, []);

  useEffect(() => {
    //saving nominee list to local storage
    localStorage.setItem("movies", JSON.stringify(nomineeList));
  }, [nomineeList]);

  //remove nominees matching id
  const handleDelete = (id) => {
    addNominee((oldList) => oldList.filter((item) => item.key !== id));
  };

  //if clicked movie's title matches any title on nomination list,return
  const clickedMovie = (movie) => {
    return nomineeList.find((n) => n.title === movie.Title);
  };

  const classes = useStyles();
  const smallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className={classes.movieList}>
        <Grow in>
          <div className={classes.banner}>
            {nomineeList.length === 5 ? (
              <Typography
                variant={smallScreen ? "h5" : "h4"}
                align="center"
                gutterBottom
                color="initial"
              >
                Thank you for nominating 🎉
              </Typography>
            ) : !movieData ? (
              <Typography variant="h6" color="secondary" align="center">
                No results found 🤔
              </Typography>
            ) : null}
          </div>
        </Grow>
        <div className={classes.movieGrid}>
          <Grid container spacing={2}>
            {movieData
              ? movieData.map((movie) => (
                  <Grid item key={uniqId()} xs={6} sm={4} md={6} lg={3}>
                    <Movie
                      title={movie.Title}
                      year={movie.Year}
                      poster={movie.Poster}
                      handleClick={() => handleClick(movie)}
                      clickedMovie={clickedMovie(movie)}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
          <NomineeList nomineeList={nomineeList} handleDelete={handleDelete} />
        </div>
      </div>

      <Snackbar
        open={snackBar}
        onClose={() => openSnackBar(false)}
        autoHideDuration={1000}
      >
        {nomineeList.length < 5 ? (
          <Alert
            onClose={() => openSnackBar(false)}
            severity="success"
            elevation={6}
          >
            Movie added for nomination
          </Alert>
        ) : (
          <Alert
            onClose={() => openSnackBar(false)}
            severity="error"
            elevation={6}
          >
            Your nominee list is full
          </Alert>
        )}
      </Snackbar>
    </>
  );
};

export default MovieList;
