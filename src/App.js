import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import CssBaseline from "@material-ui/core/CssBaseline"; //To normalize app
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
    marginLeft: "4rem",
  },
}));

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
        <Container className={classes.root} maxWidth="lg">
          <Form handleChange={(e) => setMovie(e.target.value)} />
          <MovieList movieData={movieData} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
