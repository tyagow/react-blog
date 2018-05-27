import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import VoteForm from "../votes/VoteForm";
import CommentCountLabel from "../ui/CommentCountLabel";

export const PostLabel = props => {
  return (
    <div key={props.post.id}>
      <div className="d-flex flex-row">
        <div className="col">
          <Link to={`/${props.post.category}/${props.post.id}`}>
            <h3 className="postlabel-title text-info">{props.post.title}</h3>
          </Link>
        </div>
        <div className="col-2">
          <button
            data-test="deleteButton"
            className="btn btn-outline-danger btn-sm ml-4 "
            onClick={() => props.onDelete(props.post.id)}
          >
            delete
          </button>
        </div>
      </div>

      <div className="d-flex flex-row">
        <div className="p-2">
          <label htmlFor="postlabel-author">
            {" "}
            <i className="fa fa-user-circle" />
          </label>{" "}
          <strong>
            {" "}
            <span id="postlabel-author" className="postlabel-author">
              {props.post.author}
            </span>
          </strong>
        </div>
        <div className="p-2">
          <Link to={`/${props.post.category}`}>
            <span className="badge badge-info">{props.post.category}</span>
          </Link>
        </div>
      </div>
      <div className="flex-row d-flex">
        <div className="p-2">
          <CommentCountLabel count={props.post.commentCount} />
        </div>
        <div className="p-2">
          <span className="success align-middle">
            <i
              className="fa fa-heart   text-danger"
              style={{ fontSize: "24px" }}
            />{" "}
            <strong> {props.post.voteScore}</strong>
          </span>
        </div>
        <div className="p-2">
          <VoteForm
            type="upVote"
            className="fa fa-thumbs-up"
            id={props.post.id}
            label="posts"
            callback={props.updatePost}
          />
        </div>
        <div className="p-2">
          <VoteForm
            type="downVote"
            className="fa fa-thumbs-down"
            id={props.post.id}
            label="posts"
            callback={props.updatePost}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

PostLabel.propTypes = {
  post: PropTypes.object.isRequired,
  sendVote: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PostLabel;
