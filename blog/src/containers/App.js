import React, { Component } from "react";
import { Route, Switch } from "react-router";

import NotFoundPage from "./NotFoundPage";
import PostDetailPage from "./PostDetailPage";
import CategoryPage from "./CategoryPage";
import PostCreatePage from "./PostCreatePage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={({ match }) => <CategoryPage />} />
        <Route exact path="/posts/create" render={() => <PostCreatePage />} />
        <Route
          exact
          path="/:category/"
          render={({ match }) => (
            <CategoryPage category={match.params.category} />
          )}
        />
        <Route
          path="/:category/:postId"
          render={({ match }) => <PostDetailPage match={match} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
