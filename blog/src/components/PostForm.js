import React, { Component } from "react";
import guid from "../utils";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author: "",
      category: "react"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      id: guid(),
      title: this.state.title,
      body: this.state.body,
      timestamp: Date.now(),
      category: this.state.category
    };

    fetch("http://127.0.0.1:3001/posts", {
      method: "POST",
      headers: {
        Authorization: "ok",
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h2>Create Post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="category">Category:</label>
            <br />
            <select
              name="category"
              onChange={this.onChange}
              defaultValue={this.state.category}
            >
              {this.props.categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea
              type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default PostForm;
