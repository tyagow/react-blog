import React from "react";
import { PropTypes } from "prop-types";
export const DownVote = ({ onSubmitVote }) => (
  <div>
    <button className="vote-button" onClick={onSubmitVote}>
      <i className="fa fa-thumbs-down" />
    </button>
  </div>
);

DownVote.propTypes = {
  onSubmitVote: PropTypes.func.isRequired
};
export default DownVote;
