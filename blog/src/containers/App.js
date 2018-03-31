import React, { Component } from "react";
import { Route } from "react-router-dom";

import Posts from "../components/posts/Posts";
import PostForm from "../components/posts/PostForm";
import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";

const categories = ["react", "js", "redux"];

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="container">
              <PostForm categories={categories} />
              <hr />
              <Posts />
            </div>
          )}
        />
        <Route
          exact
          path="/:category/:postId"
          render={({ match }) => (
            <div className="">
              <PostDetail postId={match.params.postId} />
              <Comments postId={match.params.postId} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
