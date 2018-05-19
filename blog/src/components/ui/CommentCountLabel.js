import React from "react";
import PropTypes from "prop-types";

const CommentCountLabel = ({ count }) => (
  <div>
    <i className="fa fa-comment-o" style={{ fontSize: "24px" }} />{" "}
    <strong>{count}</strong>
  </div>
);

CommentCountLabel.propTypes = {
  count: PropTypes.number.isRequired
};

export default CommentCountLabel;
