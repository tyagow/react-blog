import React from "react";
import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";
import CommentForm from "../components/comments/CommentForm";
import { Header } from "../components/ui/Header";

const PostDetailPage = props => (
  <div>
    <Header />
    <div className="post-detail-page-container">
      <PostDetail postId={props.match.params.postId} />
      <CommentForm parend_id={props.match.params.postId} />
      <Comments postId={props.match.params.postId} />
    </div>
  </div>
);

export default PostDetailPage;
