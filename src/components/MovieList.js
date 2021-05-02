import { useState } from "react";
import Movie from "../components/Movie";
import NomineeList from "./NomineeList";
import { useStyles } from "../styles";
import { Grid, Typography, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import uniqId from "uniqid";

const MovieList = ({ movieData }) => {
  const [nomineeList, addNominee] = useState([]);
  const [disabled, setDisabled] = useState(false);
  // const [snackBar, openSnackBar] = useState(false);

  const handleClick = (movie) => {
    // nomineeList.length < 5 //Show banner when user reached 5 nominations
    //   ?
    addNominee((oldList) => [
      ...oldList,
      { title: movie.Title, key: movie.imdbID },
    ]);
    //   : openSnackBar(false);
    // setDisabled(!disabled);
    // openSnackBar(true);
  };
  const handleDelete = (id) => {
    addNominee((oldList) => oldList.filter((item) => item.key !== id)); //remove nominees matching id
  };

  // const handleClose = (reason) => {
  //   //Close and reset snackbar
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   openSnackBar(false);
  // };
  const classes = useStyles();
  return (
    <>
      <div className={classes.movieList}>
        {/* <div className={classes.banner}>
          {nomineeList.length === 5 ? (
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              color="initial"
            >
              You've nominated 5 movies
            </Typography>
          ) : !movieData ? (
            <Typography variant="h6" color="secondary" align="center">
              No results found 🤔
            </Typography>
          ) : null}
        </div> */}
        <div className={classes.movieGrid}>
          <Grid container spacing={4}>
            {movieData
              ? movieData.map((movie) => (
                  <Grid key={uniqId()} item xs={12} sm={4} md={3} lg={4}>
                    <Movie
                      title={movie.Title}
                      year={movie.Year}
                      poster={movie.Poster}
                      handleClick={() => handleClick(movie)}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
          <NomineeList nomineeList={nomineeList} handleDelete={handleDelete} />
        </div>
      </div>

      {/* <Snackbar open={snackBar} onClose={handleClose} autoHideDuration={2000}>
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Movie added for nomination
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default MovieList;

// setButtonState(!buttonState);
// buttonState={banner} //Disable all buttons if banner is true
// nomineeList.length <= 5 ? setButtonState(false) : console.log("null");
// console.log(nomineeList.map((li) => li.key === movie.imdbID));
