import React, { Component } from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Usercard from "./Usercard";
import SearchForm from "./SearchForm";

class Users extends Component {
  render() {
    return (
      <div id="users_component">
        <ImageList>
          <ImageListItem>
            <ListSubheader
              style={{ color: "whitesmoke", fontSize: "24px" }}
              component="h1"
            >
              Github Users
            </ListSubheader>
            <SearchForm searchUsers={this.props.searchUsers} />
          </ImageListItem>
          {this.props.users.map((user, index) => (
            <Usercard user={user} key={index} />
          ))}
        </ImageList>
      </div>
    );
  }
}

export default Users;
