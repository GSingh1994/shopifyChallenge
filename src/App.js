import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: "",
    };
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    const { input } = this.state;
    return (
      <div>
        <Form handleChange={this.handleChange} />

        <div>
          {input ? `Showing results for  ${input}` : "Please search a movie 🙂"}
        </div>
      </div>
    );
  }
}

export default App;
