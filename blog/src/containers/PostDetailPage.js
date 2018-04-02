import React from "react";
import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";

const PostDetailPage = props => {
  return (
    <div className="">
      <PostDetail postId={props.match.params.postId} />
      <Comments postId={props.match.params.postId} />
    </div>
  );
};

export default PostDetailPage;
