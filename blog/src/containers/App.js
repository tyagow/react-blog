import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";

const categories = ["react", "js", "redux"];

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
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
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
