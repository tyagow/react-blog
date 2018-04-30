import React from "react";
import { Link } from "react-router-dom";
import VoteForm from "../votes/VoteForm";
import { sendVote, updatePost } from "../../actions/postActions";
import connect from "react-redux/lib/connect/connect";

export const PostLabel = props => {
  return (
    <div key={props.post.id}>
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <h3 className="postlabel-title">{props.post.title}</h3>
      </Link>

      <div className="d-flex flex-row">
        <div className="p-2">
          <Link to={`/${props.post.category}`}>
            <span className="badge badge-info">{props.post.category}</span>
          </Link>
        </div>
        <div className="p-2">
          <label htmlFor="postlabel-author">Author: </label>{" "}
          <strong>
            {" "}
            <span id="postlabel-author" className="postlabel-author">
              {props.post.author}
            </span>
          </strong>
        </div>
      </div>
      <div className="flex-row d-flex">
        <div className="p-2">
          Votes: <span className="success">{props.post.voteScore}</span>
        </div>
        <div className="p-2">
          <VoteForm
            type="upVote"
            className="fa fa-thumbs-up"
            id={props.post.id}
            label="posts"
            callback={updatePost}
          />
        </div>
        <div className="p-2">
          <VoteForm
            type="downVote"
            className="fa fa-thumbs-down"
            id={props.post.id}
            label="posts"
            callback={updatePost}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default connect(undefined, { sendVote, updatePost })(PostLabel);
