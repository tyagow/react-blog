import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";

import PostLabel from "./PostLabel";
import {
  getPosts,
  getCategories,
  updatePostFilter,
  updatePostDateOrder,
  sendVote,
  updatePost,
  requestAPIDeletePost
} from "../../actions/postActions";

import { makeGetVisiblePosts } from "../../selectors";
import ButtonList from "../../components/ui/ButtonList";
import { reselectCategories } from "../../reducers/CategoryReducer";

export class Posts extends Component {
  componentDidMount = () => {
    this.props.getCategories();
    this.props.getPosts();
  };

  render() {
    const items = getPostLabelList(this.props.posts, {
      sendVote: this.props.sendVote,
      updatePost: this.props.updatePost,
      onDelete: this.props.requestAPIDeletePost
    });
    return (
      <div>
        <h1 className="mt-4">
          <span>Posts</span>
          <Link className="float-right" to="posts/create">
            <button className="btn btn-info posts-create">Create Post</button>
          </Link>
        </h1>
        <hr />
        <div className="row p-2">
          <div className="col-1">Category{"   "}</div>
          <div className="col-3">
            <ButtonList
              active={this.props.filters.category}
              labels={["all", ...this.props.categories]}
              data-test="posts-categories-buttonlist"
              callback={this.props.updatePostFilter}
            />
          </div>

          <div className="col-2">Date Order{"   "}</div>
          <div className="col-2">
            <ButtonList
              active={this.props.filters.date}
              labels={["asc", "desc"]}
              data-test="posts-date-order-buttonlist"
              callback={this.props.updatePostDateOrder}
            />
          </div>
        </div>
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
    categories: reselectCategories(state),
    filters: {
      category: state.posts.filters.category,
      date: state.posts.filters.date
    }
  });
  return mapStateToProps;
};

export const mapStateToProps = makeMapStateToProps();

export const getPostLabelList = (posts, actions) =>
  posts.map(post => <PostLabel key={post.id} post={post} {...actions} />);

export default connect(mapStateToProps, {
  getPosts,
  getCategories,
  updatePostFilter,
  updatePostDateOrder,
  sendVote,
  updatePost,
  requestAPIDeletePost
})(Posts);
