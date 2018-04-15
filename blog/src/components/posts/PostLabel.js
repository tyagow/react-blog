import React from "react";
import { Link } from "react-router-dom";

export const PostLabel = props => {
  return (
    <div key={props.post.id}>
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <h3>{props.post.title}</h3>
      </Link>
      <button style={styleMap.categoryLabel.style} disabled>
        {props.post.category}
      </button>
      <div>Author - {props.post.author}</div>
    </div>
  );
};
const styleMap = {
  categoryLabel: {
    style: {
      border: "0",
      color: "white",
      padding: "-10px",
      backgroundColor: "red",
      width: "20%"
    }
  }
};

export default PostLabel;
