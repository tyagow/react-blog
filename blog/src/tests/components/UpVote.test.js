import React from "react";
import { shallow } from "enzyme";

import { UpVote } from "../../components/votes/UpVote";

function setup(type = "upVote") {
  const onSubmitVote = jest.fn();
  const props = { type, onSubmitVote };
  const enzymeWrapper = shallow(<UpVote {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("UpVote Component", () => {
  it("UpVote should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should have button", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".vote-button").length).toBe(1);
  });
  it("should display icon with fa-thumbs-up class", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".fa-thumbs-up").length).toBe(1);
  });
  it("should call submitVote when button is clicked", () => {
    const { enzymeWrapper, props } = setup();
    const onSubmitVote = props.onSubmitVote;
    enzymeWrapper.find(".vote-button").simulate("click");
    expect(onSubmitVote).toBeCalled();
  });
});
