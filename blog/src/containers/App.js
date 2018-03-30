import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Posts from "../components/Posts";
import PostForm from "../components/PostForm";

const categories = ["react", "js", "redux"];

const App = () => (
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
  </div>
);

export default App;
