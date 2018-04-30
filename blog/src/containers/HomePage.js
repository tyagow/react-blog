import React from "react";
import Posts from "../components/posts/Posts";
import Header from "../components/ui/Header";

export const HomePage = () => (
  <div>
    <Header />
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default HomePage;
