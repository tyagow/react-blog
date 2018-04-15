import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostLabel from "./PostLabel";
import { getPosts, getCategories } from "../../actions/postActions";

export class Posts extends Component {
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
    const items = getPostLabelList(this.props.posts);
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

export const getPostLabelList = posts =>
  posts.map(post => <PostLabel key={post.id} post={post} />);

export default connect(mapStateToProps, { getPosts, getCategories })(Posts);
