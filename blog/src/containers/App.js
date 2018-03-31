import React, { Component } from "react";
import { Route } from "react-router-dom";

import Posts from "../components/Posts";
import PostForm from "../components/PostForm";
import PostDetail from "../components/PostDetail";

const categories = ["react", "js", "redux"];

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="App">
              <PostForm categories={categories} />
              <hr />
              <Posts />
            </div>
          )}
        />
        <Route
          exact
          path="/:category/:postId"
          render={({ match }) => <PostDetail postId={match.params.postId} />}
        />
      </div>
    );
  }
}

export default App;
