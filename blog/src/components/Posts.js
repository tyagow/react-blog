import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:3001/posts", {
      headers: {
        Authorization: "ok",
        dataType: "json"
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }

  render() {
    const items = this.state.posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <div>Author:{post.author}</div>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {items}
      </div>
    );
  }
}

export default Posts;
