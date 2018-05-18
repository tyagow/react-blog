import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updatePostFilter } from "../actions/postActions";

import Posts from "../components/posts/Posts";
import Header from "../components/ui/Header";

export class CategoryPage extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired
  };
  componentDidMount = () => {
    this.props.updatePostFilter(this.props.category);
  };
  componentDidUpdate = () => {
    this.props.updatePostFilter(this.props.category);
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

export default connect(undefined, { updatePostFilter })(CategoryPage);
