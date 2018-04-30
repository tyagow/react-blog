import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import PostDetailPage from "./PostDetailPage";
import PostForm from "../components/posts/PostForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/posts/create" render={() => <PostForm />} />
            <Route
              exact
              path="/:category/:postId"
              render={({ match }) => <PostDetailPage match={match} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
