import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
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
    fetch(`http://www.omdbapi.com/?s=${movie}&type=movie&apikey=dd2c16f0`)
      .then((result) => result.json())
      .then((data) =>
        this.setState({
          movieData: data.Search,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { movie, movieData } = this.state;
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <div>
          {movie.length
            ? `Showing results for  "${movie}"`
            : "Please search a movie 🙂"}
        </div>
        <MovieList movieData={movieData} />
      </div>
    );
  }
}

export default App;
