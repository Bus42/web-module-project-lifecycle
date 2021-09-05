import React, { Component } from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Usercard from "./Usercard";

class Users extends Component {
  constructor() {
    super();
    this.state = {};
  }

  subHeaderStyle = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    height: "3rem",
    width: "100%",
  };

  render() {
    return (
      <div id="users_component">
        <ImageList>
          <div className="firstUserCard">
            <ImageListItem style={this.subHeaderStyle}>
              <ListSubheader component="div">Github Users</ListSubheader>
            </ImageListItem>
          </div>
          <div className="userCards">
            {this.props.users.map((user, index) => (
              <Usercard user={user} key={index} />
            ))}
          </div>
        </ImageList>
      </div>
    );
  }
}

export default Users;
