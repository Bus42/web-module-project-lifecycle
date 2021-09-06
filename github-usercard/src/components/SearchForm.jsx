import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { formValue: "" };
  }

  handleChange = (e) => {
    this.setState({ formValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.formValue);
    this.setState({ formValue: "" });
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <Input
          variant="outlined"
          style={{ color: "whitesmoke", borderColor: "whitesmoke" }}
          color="whitesmoke"
          type="text"
          placeholder="enter user name"
          value={this.state.formValue}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          variant="outlined"
          style={{ color: "whitesmoke", borderColor: "whitesmoke" }}
        >
          Search GitHub
        </Button>
      </form>
    );
  }
}

export default SearchForm;
