import React from "react";
import { shallow } from "enzyme";

import { DownVote } from "../../components/votes/DownVote";

function setup() {
  const onSubmitVote = jest.fn();
  const props = { onSubmitVote };
  const enzymeWrapper = shallow(<DownVote {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("DownVote Component", () => {
  it("DownVote should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should have button", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".vote-button").length).toBe(1);
  });
  it("should display icon with fa-thumbs-down class", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".fa-thumbs-down").length).toBe(1);
  });
  it("should call submitVote when button is clicked", () => {
    const { enzymeWrapper, props } = setup();
    const onSubmitVote = props.onSubmitVote;
    enzymeWrapper.find(".vote-button").simulate("click");
    expect(onSubmitVote).toBeCalled();
  });
});
