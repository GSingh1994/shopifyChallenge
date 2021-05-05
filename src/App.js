import { useStyles, theme } from "./styles";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import DefaultList from "./DefaultList";

import {
  CssBaseline,
  Container,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const App = () => {
  const [movie, setMovie] = useState("");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(DefaultList);
  }, []);

  useEffect(() => {
    if (!movie) return;

    const fetchData = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${movie}&type=movie&apikey=dd2c16f0`
      );
      const data = await response.json();
      setMovieData(data.Search);
    };
    fetchData();
  }, [movie]);

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container className={classes.appContainer} maxWidth="xl">
          <div className={classes.header}>
            <Typography
              gutterBottom
              align="center"
              variant="h2"
              color="initial"
            >
              Shoppies
            </Typography>
            <Typography variant="h6" align="center" color="initial">
              Search and nominate 5 movies of your choice for the next Shoppies
              award! 🏆
            </Typography>
          </div>
          <Form handleChange={(e) => setMovie(e.target.value)} />
          <MovieList movieData={movieData} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
