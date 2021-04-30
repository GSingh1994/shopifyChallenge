import React, { useState } from "react";
import Movie from "../components/movie";
import uniqid from "uniqid";
import NomineeList from "./NomineeList";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const MovieList = ({ movieData }) => {
  const [nomineeList, addNominee] = useState([]);
  const handleClick = (movie) => {
    addNominee((oldList) => [
      ...oldList,
      { title: movie.Title, key: uniqid(), poster: movie.Poster },
    ]);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {movieData ? (
            movieData.map((movie) => (
              <Grid key={uniqid()} item xs={12} sm={6} lg={3}>
                <Movie
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  handleClick={() => handleClick(movie)}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" color="secondary" align="center">
              No results found 🤔
            </Typography>
          )}
        </Grid>
      </Container>

      <NomineeList nomineeList={nomineeList} />
    </>
  );
};

export default MovieList;
