import React, { Component } from "react";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ImageListItem from "@material-ui/core/ImageListItem";

class Usercard extends Component {
  componentDidMount() {
    console.log("%cUsercard: CDM", "color: green");
  }

  componentDidUpdate() {
    console.log("%cUsercard: CDU", "color: orange");
  }

  render() {
    const { avatar_url, login, name, html_url } = this.props.user;
    return (
      <ImageListItem>
        <img src={avatar_url} alt={`${login} avatar`} />
        <a href={html_url} target={login}>
          <ImageListItemBar title={login} subtitle={name} />
        </a>
      </ImageListItem>
    );
  }
}

export default Usercard;
