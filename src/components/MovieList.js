import React, { useState } from "react";
import Movie from "../components/movie";
import uniqid from "uniqid";
import NomineeList from "./NomineeList";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

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
        <Grid container spacing={2} alignContent="space-between">
          {movieData ? (
            movieData.map((movie) => (
              <Grid key={uniqid()} item xs={6} sm={4} lg={3}>
                <Movie
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  handleClick={() => handleClick(movie)}
                />
              </Grid>
            ))
          ) : (
            <div>No results found 🤔</div>
          )}
        </Grid>
      </Container>

      <NomineeList nomineeList={nomineeList} />
    </>
  );
};

export default MovieList;
