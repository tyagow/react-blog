import React from "react";
import PropTypes from "prop-types";

const PostDetail = props => {
  return (
    <div key={props.post.id}>
      <h3>{props.post.title}</h3>
      <button style={styleMap.categoryLabel.style} disabled>
        {props.post.category}
      </button>
      <div>Author - {props.post.author}</div>
      <p>{props.post.body}</p>
    </div>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};
var styleMap = {
  categoryLabel: {
    style: {
      border: "0",
      color: "white",
      padding: "-10px",
      backgroundColor: "red"
    }
  }
};
export default PostDetail;
