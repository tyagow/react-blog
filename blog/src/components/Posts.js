import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
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
