import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";

import { getPostById, updatePostDetail } from "../../actions/postActions";

export class PostDetail extends Component {
  state = {
    editing: false
  };
  componentDidMount() {
    this.props.getPostById(this.props.postId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.post) {
      return { ...nextProps.post, editing: nextProps.edit };
    }
    return null;
  }
  onClick = () => {
    this.setState({ editing: !this.state.editing });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  updatePost = () => {
    this.setState({ editing: false });
    const post = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    };
    this.props.updatePostDetail(post);
  };
  render() {
    const { editing, title, author, timestamp, body } = this.state;
    return (
      <div className="col-12">
        {title && (
          <div>
            <h1 className="mt-4">
              {editing ? (
                <input
                  data-test="postdetail-title-editable"
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={title}
                />
              ) : (
                <span data-test="postdetail-title">{title}</span>
              )}
              {editing ? (
                <button
                  data-test="postdetail-btn-update"
                  className="btn btn-info ml-4 btn-sm"
                  onClick={() => {
                    this.updatePost();
                  }}
                >
                  Update
                </button>
              ) : (
                <button
                  data-test="postdetail-btn-editable"
                  className="btn btn-info ml-4  btn-sm"
                  onClick={() => {
                    this.onClick();
                  }}
                >
                  Edit
                </button>
              )}
            </h1>
            <p className="lead" />
            <p>
              <i className="fa fa-user" /> by {author}{" "}
            </p>

            <hr />
            <p>
              <i className="fa fa-calendar" />{" "}
              <Timestamp time={timestamp} twentyFourHour />
            </p>
            <p>
              <i className="fa fa-tags" /> Category:{" "}
              <Link to={`/${this.state.category}`}>
                <span className="badge badge-info">{this.state.category}</span>
              </Link>
            </p>

            <hr />
            <p className="lead">
              {editing ? (
                <input
                  data-test="postdetail-body-editable"
                  type="text"
                  name="body"
                  onChange={this.onChange}
                  value={body}
                />
              ) : (
                <span data-test="postdetail-body">{body}</span>
              )}
            </p>
            <br />
          </div>
        )}
      </div>
    );
  }
}

PostDetail.propTypes = {
  postId: PropTypes.string.isRequired,
  post: PropTypes.object
};
const mapStateToProps = state => ({
  post: state.posts.postDetail
});

export default connect(mapStateToProps, { getPostById, updatePostDetail })(
  PostDetail
);
