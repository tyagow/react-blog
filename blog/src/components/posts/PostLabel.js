import React from "react";
import { Link } from "react-router-dom";
import { UpVote } from "../votes/UpVote";
import { DownVote } from "../votes/DownVote";

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
        <div className="p-2">
          Votes: <span className="success">{props.post.voteScore}</span>
        </div>
        <div className="p-2">
          <UpVote onSubmitVote={() => {}} />
        </div>
        <div className="p-2">
          <DownVote onSubmitVote={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PostLabel;
