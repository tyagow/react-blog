import React from "react";
import { PropTypes } from "prop-types";
export const UpVote = ({ onSubmitVote }) => (
  <div>
    <button className="vote-button" onClick={onSubmitVote}>
      <i className="fa fa-thumbs-up" />
    </button>
  </div>
);

UpVote.propTypes = {
  onSubmitVote: PropTypes.func.isRequired
};
export default UpVote;
