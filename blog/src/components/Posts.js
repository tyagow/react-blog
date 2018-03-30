import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const items = this.props.posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <div>Author:{post.author}</div>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {items}
      </div>
    );
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
