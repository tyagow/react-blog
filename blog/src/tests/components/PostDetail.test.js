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
      body: "Post bodyyyyy",
      category: "react",
      title: "Test title"
    },
    updatePostDetail: jest.fn()
  };
  const enzymeWrapper = shallow(<PostDetail {...props} />);
  enzymeWrapper.setState({ editing });
  return {
    props,
    enzymeWrapper
  };
}
describe("PostDetail", () => {
  describe("PostDetail state", () => {
    it("renders PostDetail without crashing editable = false", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
    it("snapshot editable = true", () => {
      const { enzymeWrapper } = setup(true);
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
  describe("Edit button", () => {
    it('should exist a Edit button with data-test property equals "postdetail-btn-editable"', () => {
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
      expect(enzymeWrapper.state().editing).toEqual(true);
    });
  });
  describe("Update post button", () => {
    it("should have an update button if state.editing = true", () => {
      const { enzymeWrapper } = setup(true);
      expect(
        enzymeWrapper.find("[data-test='postdetail-btn-update']").length
      ).toEqual(1);
    });
    it("should call props.updatePostDetail function", () => {
      const { enzymeWrapper, props } = setup(true);
      const updateButton = enzymeWrapper.find(
        "[data-test='postdetail-btn-update']"
      );
      updateButton.simulate("click");
      expect(props.updatePostDetail).toBeCalled();
      it("state should change to editing = false ", () => {
        expect(enzymeWrapper.state().editing).toEqual(false);
      });
    });
  });

  describe("PostDetail elements", () => {
    describe("title", () => {
      it("should have the title post", () => {
        const { enzymeWrapper, props } = setup();
        const { title } = props.post;
        const titleComponent = enzymeWrapper.find(
          "[data-test='postdetail-title']"
        );
        expect(titleComponent.length).toBe(1);
        expect(titleComponent.text()).toEqual(title);
      });
      it("should have editable title when state.editing = true", () => {
        const { enzymeWrapper, props } = setup(true);
        const { title } = props.post;
        const titleEditableComponent = enzymeWrapper.find(
          "[data-test='postdetail-title-editable']"
        );
        expect(titleEditableComponent.length).toBe(1);
        expect(titleEditableComponent.props().value).toEqual(title);
      });
    });
    describe("body", () => {
      it("should have the body post", () => {
        const { enzymeWrapper, props } = setup();
        const { body } = props.post;
        const bodyComponent = enzymeWrapper.find(
          "[data-test='postdetail-body']"
        );
        expect(bodyComponent.length).toBe(1);
        expect(bodyComponent.text()).toEqual(body);
      });
      it("should have editable body when state.editing = true", () => {
        const { enzymeWrapper, props } = setup(true);
        const { body } = props.post;
        const bodyEditableComponent = enzymeWrapper.find(
          "[data-test='postdetail-body-editable']"
        );
        expect(bodyEditableComponent.length).toBe(1);
        expect(bodyEditableComponent.props().value).toEqual(body);
      });
      // TODO:  Create test onChange
    });
  });
});
