import React from "react";
import { shallow } from "enzyme";

import { Posts, mapStateToProps } from "../../components/posts/Posts";

const setup = (posts = undefined, renderer = shallow) => {
  const {
    props,
    getCategories,
    getPosts,
    updatePostFilter,
    updatePostDateOrder,
    updatePost,
    onDelete,
    sendVote
  } = getPostProps(posts);
  const enzymeWrapper = renderer(<Posts {...props} />);
  return {
    props,
    enzymeWrapper,
    getCategories,
    getPosts,
    updatePostFilter,
    updatePostDateOrder,
    updatePost,
    onDelete,
    sendVote
  };
};
describe("Posts", () => {
  it("renders posts without crashing", () => {
    const { enzymeWrapper } = setup([post]);
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it("should call getCategories and getPosts after mount", () => {
    const { getCategories, getPosts } = setup();
    expect(getCategories).toHaveBeenCalled();
    expect(getPosts).toHaveBeenCalled();
  });

  it("should have link to posts/create", () => {
    const { enzymeWrapper } = setup([post]);
    expect(enzymeWrapper.find(".posts-create")).toHaveLength(1);
  });
  describe("mapStateToProps", () => {
    it("should map correctly given state to props", () => {
      const state = {
        posts: { items: [], item: {}, filters: { category: "all" } },
        categories: []
      };
      const props = {};
      expect(mapStateToProps(state, props)).toEqual({
        posts: [],
        newPost: {},
        filters: { category: "all" },
        categories: []
      });
    });
  });
});

const getPostProps = posts => {
  const getPosts = jest.fn();
  const updatePost = jest.fn();
  const onDelete = jest.fn();
  const sendVote = jest.fn();
  const getCategories = jest.fn();
  const updatePostFilter = jest.fn();
  const updatePostDateOrder = jest.fn();

  const props = {
    posts: posts ? posts : [post],
    filters: { category: "all" },
    categories: ["react"],
    getCategories: getCategories,
    getPosts: getPosts,
    updatePostFilter,
    updatePostDateOrder,
    updatePost: updatePost,
    requestAPIDeletePost: onDelete,
    sendVote
  };
  return { props, getCategories, getPosts };
};

const post = {
  id: 1,
  category: "react",
  title: "Test title",
  author: "Test Author"
};
