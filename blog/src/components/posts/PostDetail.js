import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";

import VoteForm from "../votes/VoteForm";
import withRouter from "react-router-dom/withRouter";

export class PostDetail extends Component {
  state = { editing: false };
  componentDidMount = () => {
    this.setState({ editing: !this.props.match.isExact });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.post === prevState.post) {
      return undefined;
    }
    return { post: { ...nextProps.post } };
  }
  onClick = () => {
    this.setState({ editing: !this.state.editing });
  };
  onChange = e => {
    this.setState({
      post: { ...this.state.post, [e.target.name]: e.target.value }
    });
  };
  updatePost = () => {
    this.setState({ editing: false });
    const post = {
      id: this.state.post.id,
      title: this.state.post.title,
      body: this.state.post.body,
      category: this.state.post.category
    };
    this.props.updatePostDetail(post);
  };
  render() {
    const { editing, post } = this.state;

    return (
      <div className="col-12">
        {post.title && (
          <div>
            <h1 className="mt-4">
              {editing ? (
                <input
                  data-test="postdetail-title-editable"
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={post.title}
                />
              ) : (
                <span data-test="postdetail-title">{post.title}</span>
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
                <React.Fragment>
                  <button
                    data-test="postdetail-btn-editable"
                    className="btn btn-outline-info ml-4  btn-sm"
                    onClick={() => {
                      this.onClick();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    data-test="deleteButton"
                    className="btn btn-outline-danger btn-sm ml-4 "
                    onClick={() =>
                      this.props.requestAPIDeletePost(this.props.post.id)
                    }
                  >
                    delete
                  </button>
                </React.Fragment>
              )}
            </h1>
            <p className="lead" />
            <p>
              <i className="fa fa-user" /> by {post.author}{" "}
            </p>

            <hr />
            <p>
              <i className="fa fa-calendar" />{" "}
              <Timestamp time={post.timestamp} twentyFourHour />
            </p>
            <p>
              <i className="fa fa-tags" /> Category:{" "}
              <Link to={`/${post.category}`}>
                <span className="badge badge-info">{post.category}</span>
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
                  value={post.body}
                />
              ) : (
                <span data-test="postdetail-body">{post.body}</span>
              )}
            </p>
            <div className="flex-row d-flex">
              <div className="p-2" data-test="vote-score">
                <span className="success align-middle">
                  <i
                    className="fa fa-heart   text-danger"
                    style={{ fontSize: "24px" }}
                  />{" "}
                  <strong> {this.props.post.voteScore}</strong>
                </span>
              </div>
              <div className="p-2">
                <VoteForm
                  type="upVote"
                  className="fa fa-thumbs-up"
                  id={this.props.post.id}
                  label="posts"
                  callback={this.props.updatePost}
                />
              </div>
              <div className="p-2">
                <VoteForm
                  type="downVote"
                  className="fa fa-thumbs-down"
                  id={this.props.post.id}
                  label="posts"
                  callback={this.props.updatePost}
                />
              </div>
            </div>
            <br />
          </div>
        )}
      </div>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default withRouter(PostDetail);
