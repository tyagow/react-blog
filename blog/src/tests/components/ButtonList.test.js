import React from "react";
import { render, shallow } from "enzyme";
import { expect as cExpect } from "chai";

import { ButtonList } from "../../components/ui/ButtonList";

function setup(
  { labels, renderer = render } = { labels: ["react"], renderer: render }
) {
  const callback = jest.fn();
  const props = { labels: labels, callback };
  const enzymeWrapper = renderer(<ButtonList {...props} />);
  return {
    props,
    enzymeWrapper
  };
}
describe("ButtonList", () => {
  it("renders ButtonList without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should ButtonList props have a labels list", () => {
    const { enzymeWrapper, props } = setup();
    cExpect(enzymeWrapper.text()).to.contain(props.labels[0]);
  });
  it("should ButtonList render all given label", () => {
    const { enzymeWrapper, props } = setup({ labels: ["react", "python"] });
    expect(enzymeWrapper).toMatchSnapshot();

    cExpect(enzymeWrapper.text()).to.contain(props.labels[0]);
    cExpect(enzymeWrapper.text()).to.contain(props.labels[1]);
  });

  it("should call the callback passed in props", () => {
    const { enzymeWrapper, props } = setup({
      labels: ["react", "python"],
      renderer: shallow
    });
    const button = enzymeWrapper.find("[data-test='react']");
    button.simulate("click");
    expect(props.callback).toHaveBeenCalledWith("react");
  });
});
