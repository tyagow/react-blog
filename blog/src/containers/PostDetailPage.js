import React from "react";
import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";
import CommentForm from "../components/comments/CommentForm";
import Header from "../components/ui/Header";

const PostDetailPage = props => (
  <div>
    <Header />
    <div className="post-detail-page-container">
      <div className="container">
        <div className="row">
          <PostDetail postId={props.match.params.postId} />
        </div>
        <div className="row">
          <CommentForm parend_id={props.match.params.postId} />
        </div>
        <div className="row">
          <Comments postId={props.match.params.postId} />
        </div>
      </div>
    </div>
  </div>
);

export default PostDetailPage;
