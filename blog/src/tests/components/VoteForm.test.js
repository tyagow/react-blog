import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { VoteForm } from "../../components/votes/VoteForm";

configure({ adapter: new Adapter() });

function setup(type = "upVote") {
  const props = { type };
  const enzymeWrapper = shallow(<VoteForm {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("Vote Component", () => {
  it("Vote should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should have button", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".vote-button").length).toBe(1);
  });
  it("renderIcon should  return class name fa-thumbs-up when type parameter is 'upVote'", () => {});
});
