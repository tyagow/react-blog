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
          <div className="form-group">
            <label for="category">Category</label>
            <select
              id="category"
              name="category"
              onChange={this.onChange}
              className="form-control"
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
          <div className="form-group">
            <label for="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div className="form-group">
            <label for="body">Body</label>
            <br />
            <textarea
              id="body"
              type="text"
              name="body"
              className="form-control"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default PostForm;
