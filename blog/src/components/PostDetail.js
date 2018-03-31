import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styleMap from "../styles";
import { getPostById } from "../actions/postActions";

class PostDetail extends Component {
  componentDidMount = () => {
    this.props.dispatch(getPostById(this.props.postId));
  };

  render() {
    return (
      <div>
        {this.props.post && (
          <div key={this.props.post.id}>
            <h3>{this.props.post.title}</h3>
            <button style={styleMap.categoryLabel.style} disabled>
              {this.props.post.category}
            </button>
            <div>Author - {this.props.post.author}</div>
            <p>{this.props.post.body}</p>
          </div>
        )}
      </div>
    );
  }
}

PostDetail.propTypes = {
  postId: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  post: state.posts.postDetail
});

export default connect(mapStateToProps)(PostDetail);
