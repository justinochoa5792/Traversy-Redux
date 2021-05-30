import React, { Component } from "react";
import Axios from "axios";

class Post extends Component {
  state = {
    posts: [],
  };

  async componentWillMount() {
    await Axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        console.log(response.data);
        this.setState({ posts: response.data });
      }
    );
  }
  render() {
    const postItems = this.state.posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Post;
