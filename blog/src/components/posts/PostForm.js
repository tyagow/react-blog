import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost, getCategories } from "../../actions/postActions";
import guid from "../../utils";
import { withRouter } from "react-router-dom";

export class PostForm extends Component {
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
  componentDidMount = () => {
    this.props.getCategories();
  };

  onSubmit(e) {
    e.preventDefault();
    const post = {
      id: guid(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      timestamp: Date.now(),
      category: this.state.category
    };

    this.props.createPost(post);
    this.props.history.push("/");
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="row">
          <h2>Create Post</h2>
        </div>
        <div className="row">
          <form className="postform-form col-6" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                onChange={this.onChange}
                className="form-control"
              >
                {this.props.categories &&
                  this.props.categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="title">Title</label>
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
              <label htmlFor="body">Body</label>
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
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <br />
              <input
                type="text"
                id="author"
                name="author"
                className="form-control"
                onChange={this.onChange}
                value={this.state.author}
              />
            </div>
            <br />

            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  categories: PropTypes.array
};
const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.items
  };
};

export default connect(mapStateToProps, { createPost, getCategories })(
  withRouter(PostForm)
);
