import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchCommentsByPostId,
  updateComment
} from "../../actions/commentsActions";
import VoteForm from "../votes/VoteForm";

export class Comments extends Component {
  componentDidMount() {
    this.props.fetchCommentsByPostId(this.props.postId);
  }
  render() {
    return (
      <div>
        {this.props.comments && (
          <div>
            <h3>Comments</h3>
            <hr />
            {this.props.comments.map(comment => (
              <div key={comment.id} className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h4 className="comment-author">{comment.author}</h4>
                  <p className="comment-body">{comment.body}</p>
                  <div className="flex-row d-flex">
                    <div className="p-2 comment-score">
                      Votes:{" "}
                      <span className="success">{comment.voteScore}</span>
                    </div>
                    <div className="p-2">
                      <VoteForm
                        type="upVote"
                        className="fa fa-thumbs-up"
                        id={comment.id}
                        label="comments"
                        callback={updateComment}
                      />
                    </div>
                    <div className="p-2">
                      <VoteForm
                        type="downVote"
                        className="fa fa-thumbs-down"
                        id={comment.id}
                        label="comments"
                        callback={updateComment}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )});
      </div>
    );
  }
}

Comments.propTypes = {
  postId: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  comments: state.comments.items
});

export default connect(mapStateToProps, {
  fetchCommentsByPostId,
  updateComment
})(Comments);
