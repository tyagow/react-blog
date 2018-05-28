import React from "react";
import Header from "../components/ui/Header";
import PostForm from "../components/posts/PostForm";

export default () => {
  return (
    <div>
      <Header />
      <div className="container pt-4">
        <PostForm />
      </div>
    </div>
  );
};
