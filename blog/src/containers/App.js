import React, { Component } from "react";
import { Route, Switch } from "react-router";

import NotFoundPage from "./NotFoundPage";
import PostDetailPage from "./PostDetailPage";
import CategoryPage from "./CategoryPage";
import PostForm from "../components/posts/PostForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) => <CategoryPage category="all" />}
        />
        <Route exact path="/posts/create" render={() => <PostForm />} />
        <Route
          exact
          path="/:category/:postId"
          render={({ match }) => <PostDetailPage match={match} />}
        />
        <Route
          exact
          path="/:category/"
          render={({ match }) => (
            <CategoryPage category={match.params.category} />
          )}
        />

        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
