import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { Posts } from "../../components/posts/Posts";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
const setup = (posts = undefined, renderer = shallow) => {
  const { props, getCategories, getPosts } = getPostProps(posts);
  const enzymeWrapper = renderer(<Posts {...props} />);
  return {
    props,
    enzymeWrapper,
    getCategories,
    getPosts
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

  it("", () => {
    const { getCategories, getPosts } = setup();
    expect(getCategories).toHaveBeenCalled();
    expect(getPosts).toHaveBeenCalled();
  });
});
const getPostProps = posts => {
  const getPosts = jest.fn();
  const getCategories = jest.fn();
  const props = {
    posts: posts ? posts : [post],
    getCategories: getCategories,
    getPosts: getPosts
  };
  return { props, getCategories, getPosts };
};

const post = {
  id: 1,
  category: "react",
  title: "Test title",
  author: "Test Author"
};
