import React, { Component } from "react";
import Form from "./components/Form";
import MovieList from "./components/MovieList";

import CssBaseline from "@material-ui/core/CssBaseline"; //To normalize app
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: "",
      movieData: [],
    };
  }
  handleChange(e) {
    this.setState(
      {
        movie: e.target.value,
      },
      () => this.fetchData(this.state.movie)
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  fetchData(movie) {
    fetch(`https://www.omdbapi.com/?s=${movie}&type=movie&apikey=dd2c16f0`)
      .then((result) => result.json())
      .then((data) =>
        this.setState({
          movieData: data.Search,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const theme = createMuiTheme({
      palette: {
        type: "dark",
      },
    });
    const { movie, movieData } = this.state;
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />

            {/* <Typography
              variant="h6"
              color="initial"
              align="center"
              style={{ marginBottom: 10 }}
            >
              {movieData
                ? `Showing results for  "${movie}"`
                : "Please search a movie 🙂"}
            </Typography> */}

            <MovieList movieData={movieData} theme={theme} />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
