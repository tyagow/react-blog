import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostLabel from "./PostLabel";
import { getPosts, getCategories } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount = () => {
    this.props.getCategories();
    this.props.getPosts();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const items = this.props.posts.map(post => (
      <PostLabel key={post.id} post={post} />
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
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { getPosts, getCategories })(Posts);
