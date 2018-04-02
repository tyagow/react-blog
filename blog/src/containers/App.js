import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PostDetail from "../components/posts/PostDetail";
import Comments from "../components/comments/Comments";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import PostDetailPage from "./PostDetailPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/:category/:postId"
            render={({ match }) => <PostDetailPage match={match} />}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
