import React from "react";
import { Link } from "react-router-dom";

export const PostLabel = props => {
  return (
    <div key={props.post.id}>
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <h3 className="postlabel-title">{props.post.title}</h3>
      </Link>
      <Link to={`/${props.post.category}`}>
        <span className="badge badge-info">{props.post.category}</span>
      </Link>
      <div>
        <label htmlFor="postlabel-author">Author: </label>{" "}
        <strong>
          {" "}
          <span id="postlabel-author" className="postlabel-author">
            {props.post.author}
          </span>
        </strong>
      </div>
    </div>
  );
};

export default PostLabel;
