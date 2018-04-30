import React, { Component } from "react";
import { PropTypes } from "prop-types";
import connect from "react-redux/lib/connect/connect";

import { sendVote } from "../../actions/postActions";

export class VoteForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmitVote = this.onSubmitVote.bind(this);
  }
  onSubmitVote(e) {
    e.preventDefault();
    let { id, label, callback, type } = this.props;
    let vote = {
      type,
      url: label + "/" + id,
      callback: callback,
      label
    };
    this.props.sendVote(vote);
  }

  render() {
    return (
      <div>
        <button className="vote-button" onClick={this.onSubmitVote}>
          <i className={this.props.className} />
        </button>
      </div>
    );
  }
}

VoteForm.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default connect(undefined, { sendVote })(VoteForm);
