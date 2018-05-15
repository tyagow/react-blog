import React, { Component } from "react";
import Posts from "../components/posts/Posts";
import Header from "../components/ui/Header";

import PropTypes from "prop-types";

export default class CategoryPage extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired
  };
  componentDidMount = () => {
    console.log(this.props.category);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Posts />
        </div>
      </div>
    );
  }
}
