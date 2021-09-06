import "./App.css";
import React, { Component } from "react";
import { BASE_URL } from "./data/constants";
import Users from "./components/Users";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myLogin: "bus42",
      users: [],
    };
  }

  getUserAndFollowers = (user) => {
    let userArray = [...this.state.users];
    axios
      .get(`${BASE_URL}/${user}`)
      .then((res) => {
        userArray.push(res.data);
        return res.data.followers_url;
      })
      .then((res) =>
        axios
          .get(res)
          .then((res) => {
            res.data.forEach((user) => {
              if (!userArray.includes(user)) {
                userArray.push(user);
              }
            });
          })
          .catch((err) => console.error(err))
      )
      .catch(() => window.alert(`Sorry, no user ${user}`))
      .finally(() => {
        this.setState({ users: userArray });
      });
  };

  componentDidMount() {
    console.log("App: CDM");
    setTimeout(() => {
      this.getUserAndFollowers(this.state.myLogin);
    }, 1500);
  }

  searchUsers = (login) => {
    this.getUserAndFollowers(login);
  };

  render() {
    return (
      <div id="app">
        {this.state.users.length === 0 ? (
          <div>...loading</div>
        ) : (
          <Users users={this.state.users} searchUsers={this.searchUsers} />
        )}
      </div>
    );
  }
}

export default App;
