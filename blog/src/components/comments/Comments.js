import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCommentsByPostId } from "../../actions/commentsActions";

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
                  <div className="comment-score">
                    Score: {comment.voteScore}
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

export default connect(mapStateToProps, { fetchCommentsByPostId })(Comments);
