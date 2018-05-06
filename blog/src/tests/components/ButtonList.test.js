import React from "react";
import { render } from "enzyme";
import { expect as cExpect } from "chai";

import { ButtonList } from "../../components/ui/ButtonList";

function setup({ labels = ["react"] } = {}) {
  const props = { labels: labels };
  const enzymeWrapper = render(<ButtonList labels={props.labels} />);
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
  it("should ButtonList render all given labels", () => {
    const { enzymeWrapper, props } = setup({ labels: ["react", "python"] });
    cExpect(enzymeWrapper.text()).to.contain(props.labels[0]);
    cExpect(enzymeWrapper.text()).to.contain(props.labels[1]);
  });
});
