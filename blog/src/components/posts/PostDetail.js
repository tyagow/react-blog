import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      return { ...nextProps.post };
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
      <div>
        {title && (
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1>
                  {editing ? (
                    <div>
                      <input
                        data-test="postdetail-title-editable"
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={title}
                      />
                    </div>
                  ) : (
                    <span data-test="postdetail-title">{title}</span>
                  )}
                </h1>
                <p className="lead">
                  {editing ? (
                    <button
                      data-test="postdetail-btn-update"
                      className="btn btn-primary"
                      onClick={() => {
                        this.updatePost();
                      }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      data-test="postdetail-btn-editable"
                      className="btn btn-info"
                      onClick={() => {
                        this.onClick();
                      }}
                    >
                      Edit
                    </button>
                  )}
                </p>
                <p>
                  <i className="fa fa-user" /> by {author}{" "}
                </p>

                <hr />
                <p>
                  <i className="fa fa-calendar" /> Posted on {timestamp}
                </p>
                <p>
                  <i className="fa fa-tags" /> Category:{" "}
                  <Link to={`/${this.state.category}`}>
                    <span className="badge badge-info">
                      {this.state.category}
                    </span>
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
            </div>
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
