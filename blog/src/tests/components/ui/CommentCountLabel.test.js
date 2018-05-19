import React from "react";
import Enzyme from "enzyme";
import CommentCountLabel from "../../../components/ui/CommentCountLabel";

const setup = () => {
  const props = {
    count: "5"
  };
  const enzymeWrapper = Enzyme.shallow(<CommentCountLabel {...props} />);
  return { enzymeWrapper, props };
};
describe("CommentCountLabel", () => {
  it("should match snapshot", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should render given value as prop", () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.text()).toEqual(props.count);
  });
});
