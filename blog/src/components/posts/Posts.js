import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";

import PostLabel from "./PostLabel";
import {
  getPosts,
  getCategories,
  updatePostFilter
} from "../../actions/postActions";
import { makeGetVisiblePosts } from "../../selectors";
import ButtonList from "../../components/ui/ButtonList";

export class Posts extends Component {
  componentDidMount = () => {
    this.props.getCategories();
    this.props.getPosts();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost && nextProps.newPost.id) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const items = getPostLabelList(this.props.posts);
    return (
      <div>
        <h1 className="mt-4">
          <span>Posts</span>
          <Link className="float-right" to="posts/create">
            <button className="btn btn-info posts-create">Create Post</button>
          </Link>
        </h1>
        <hr />

        <ButtonList
          labels={this.props.categories}
          data-test="posts-categories-buttonlist"
          callback={this.props.updatePostFilter}
        />
        <br />
        {items}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  categories: PropTypes.array.isRequired
};
const makeMapStateToProps = () => {
  const getVisiblePosts = makeGetVisiblePosts();
  const mapStateToProps = (state, props) => ({
    posts: getVisiblePosts(state, props),
    newPost: state.posts.item,
    categories: state.posts.categories
  });
  return mapStateToProps;
};

export const mapStateToProps = makeMapStateToProps();

export const getPostLabelList = posts =>
  posts.map(post => <PostLabel key={post.id} post={post} />);

export default connect(mapStateToProps, {
  getPosts,
  getCategories,
  updatePostFilter
})(Posts);
