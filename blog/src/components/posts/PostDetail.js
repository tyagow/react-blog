import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";

import VoteForm from "../votes/VoteForm";
import withRouter from "react-router-dom/withRouter";

export class PostDetail extends Component {
  componentDidMount = () => {
    this.setState({ editing: !this.props.match.isExact });
  };

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
