import React from "react";
import PostForm from "../components/posts/PostForm";
import Posts from "../components/posts/Posts";

export const HomePage = () => (
  <div className="container">
    <PostForm />
    <hr />
    <Posts />
  </div>
);

export default HomePage;
