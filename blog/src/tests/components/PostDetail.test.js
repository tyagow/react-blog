import React from "react";
import { shallow } from "enzyme";
import { PostDetail } from "../../components/posts/PostDetail";
function setup(editing = false) {
  const props = {
    postId: "1",
    getPostById: jest.fn(),
    post: {
      id: 1,
      author: "Mike",
      category: "react",
      title: "Test title"
    }
  };
  const enzymeWrapper = shallow(<PostDetail {...props} />);
  enzymeWrapper.setState({ editing });
  return {
    props,
    enzymeWrapper
  };
}
describe("PostDetail", () => {
  it("renders PostDetail without crashing editable = false", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  describe("Editable button", () => {
    it('should exist a button with data-test property equals "postdetail-btn-editable"', () => {
      const { enzymeWrapper } = setup();
      expect(
        enzymeWrapper.find("[data-test='postdetail-btn-editable']").length
      ).toEqual(1);
    });
    it("onClick event in the button should change State of component to editable = true", () => {
      const { enzymeWrapper } = setup();
      enzymeWrapper
        .find("[data-test='postdetail-btn-editable']")
        .simulate("click");
      expect(enzymeWrapper.state()).toEqual({ editing: true });
    });
    it("snapshot editable = true", () => {
      const { enzymeWrapper } = setup(true);
      expect(enzymeWrapper).toMatchSnapshot();
    });
    it("should have the title post", () => {
      const { enzymeWrapper, props } = setup();
      const { title } = props.post;
      const titleComponent = enzymeWrapper.find(
        "[data-test='postdetail-title']"
      );
      expect(titleComponent.length).toBe(1);
      expect(titleComponent.text()).toEqual(title);
    });
  });
});
