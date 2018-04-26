import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createComment } from "../../actions/commentsActions";
import guid from "../../utils";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      author: "",
      parent_id: props.parent_id
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const comment = {
      id: guid(),
      comment: this.state.comment,
      author: this.state.author,
      timestamp: Date.now(),
      parent_id: this.state.parent_id
    };
    this.props.createComment(comment);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="commentbox-form">
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <br />
            <textarea
              id="comment"
              className="commentbox-TextInput form-control"
              type="text"
              name="comment"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <br />
            <input
              className="commentbox-author form-control"
              id="author"
              type="text"
              name="author"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
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
