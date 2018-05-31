import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  updatePost,
  getPostById,
  updatePostDetail,
  requestAPIDeletePost
} from "../actions/postActions";

import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";
import CommentForm from "../components/comments/CommentForm";
import Header from "../components/ui/Header";
import { ToggleComponent } from "../components/ui/ToggleComponent";
import NotFoundPage from "./NotFoundPage";

export class PostDetailPage extends Component {
  componentDidMount() {
    this.props.getPostById(this.props.postId);
  }
  static propTypes = {
    postId: PropTypes.string.isRequired
  };
  renderPostPage = () => (
    <div>
      <Header />
      <div className="post-detail-page-container">
        <div className="container">
          <div className="row">
            <PostDetail
              post={this.props.post}
              updatePost={this.props.updatePost}
              updatePostDetail={this.props.updatePostDetail}
              requestAPIDeletePost={this.props.requestAPIDeletePost}
            />
          </div>
          <div className="row">
            <ToggleComponent labelOn="Create Comment" labelOff="Hide Form">
              <CommentForm parentId={this.props.postId} />
            </ToggleComponent>
          </div>
          <div className="row">
            <Comments postId={this.props.postId} />
          </div>
        </div>
      </div>
    </div>
  );
  render() {
    const { post } = this.props;
    return post && post.id ? (
      this.renderPostPage()
    ) : (
      <React.Fragment>
        {" "}
        <Header />
        <NotFoundPage />{" "}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  post: state.posts.postDetail
});

export default connect(mapStateToProps, {
  getPostById,
  updatePostDetail,
  updatePost,
  requestAPIDeletePost
})(PostDetailPage);
