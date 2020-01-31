import React, { Component } from "react";
import "./App.css";
class App extends Component {
  username = "";
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
    this.getName = this.getName.bind(this);
    this.state = {
      name: "",
      username: ""
    };

    //http urls for fetching data
    this.postUserDataURL = "/api/updateUsername";
    this.getUserDataURL = "/api/getUsername";
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitName() {
    this.postData();
  }

  getName() {
    this.fetchData();
  }

  fetchData() {
    console.log(this.getUserDataURL);
    fetch(this.getUserDataURL)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ username: result.username });
        },
        error => {
          console.log(error);
        }
      );
  }

  postData() {
    console.log(this.postUserDataURL);
    fetch(this.postUserDataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.name })
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <div className="App">
        Enter your name
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <button onClick={this.submitName}>Submit name</button>
        <button onClick={this.getName}>Fetch name</button>
        <h2>Hello, {this.state.username}</h2>
      </div>
    );
  }
}
export default App;
