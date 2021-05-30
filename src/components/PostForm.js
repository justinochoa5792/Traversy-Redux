import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  state = {
    title: "",
    body: "",
  };

  onChange(e) {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

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
            <lable>Title: </lable>
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
            <lable>Body: </lable>
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

export default PostForm;
