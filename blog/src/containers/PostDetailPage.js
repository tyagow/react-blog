import React from "react";
import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";
import CommentForm from "../components/comments/CommentForm";
import Header from "../components/ui/Header";
import { ToggleComponent } from "../components/ui/ToggleComponent";

const PostDetailPage = props => (
  <div>
    <Header />
    <div className="post-detail-page-container">
      <div className="container">
        <div className="row">
          <PostDetail postId={props.match.params.postId} />
        </div>
        <div className="row">
          <ToggleComponent labelOn="Create Comment" labelOff="Hide Form">
            <CommentForm parend_id={props.match.params.postId} />
          </ToggleComponent>
        </div>
        <div className="row">
          <Comments postId={props.match.params.postId} />
        </div>
      </div>
    </div>
  </div>
);

export default PostDetailPage;
