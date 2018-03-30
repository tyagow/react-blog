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
        <h3>{post.title}</h3>
        <button style={styleMap.categoryLabel.style} disabled>
          {post.category}
        </button>
        <div>Author - {post.author}</div>
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

let styleMap = {
  categoryLabel: {
    style: {
      border: "0",
      color: "white",
      padding: "-10px",
      backgroundColor: "red"
    }
  }
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
