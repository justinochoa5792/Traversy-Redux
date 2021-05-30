import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";
import { connect } from "react-redux";

class PostForm extends Component {
  state = {
    title: "",
    body: "",
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.createPost(post);

    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              placeholder="Search"
              name="title"
              value={this.state.title}
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <input
              type="text"
              placeholder="Search"
              name="body"
              value={this.state.body}
              onChange={(e) => this.onChange(e)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
