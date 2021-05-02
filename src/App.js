import { useState, useEffect } from "react";
import { useStyles, theme } from "./styles";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
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
        <Container className={classes.appContainer} maxWidth="lg">
          <Form handleChange={(e) => setMovie(e.target.value)} />
          <MovieList movieData={movieData} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
