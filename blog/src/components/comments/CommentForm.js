import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createComment } from "../../actions/commentsActions";
import guid from "../../utils";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author: "",
      parentId: props.parentId
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const comment = {
      id: guid(),
      body: this.state.body,
      author: this.state.author,
      timestamp: Date.now(),
      parentId: this.state.parent_id
    };
    this.props.createComment(comment);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-8">
        <form onSubmit={this.onSubmit} className="commentbox-form">
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <br />
            <textarea
              id="body"
              className="commentbox-TextInput form-control"
              type="text"
              value={this.state.body}
              name="body"
              onChange={this.onChange}
            >
              {this.state.body}
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <br />
            <input
              className="commentbox-author form-control"
              id="author"
              type="text"
              value={this.state.author}
              name="author"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-6">
            <button
              type="submit"
              className="commentbox-button form-control btn btn-info"
            >
              Send Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired,
  parent_id: PropTypes.string
};

export default connect(undefined, { createComment })(CommentForm);
