import React from "react";
import { render, shallow, mount } from "enzyme";

import { ToggleComponent } from "../../components/ui/ToggleComponent";

describe("ToggleComponent", () => {
  it("should match the saved snapshoot", () => {
    const enzymeWrapper = shallow(
      <ToggleComponent labelOn="Show" labelOff="Hide" />
    );
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should render props.labelOn on first render", () => {
    const enzymeWrapper = shallow(
      <ToggleComponent labelOn="Show" labelOff="Hide" />
    );
    expect(enzymeWrapper.text()).toEqual("Show");
  });
  it("state.displayChildren = true should render", () => {
    const enzymeWrapper = mount(
      <ToggleComponent labelOn="Show" labelOff="Hide" />
    );
    expect(enzymeWrapper.state().displayChildren).toEqual(false);
  });
  it("on click in a component children should be rendered", () => {
    const enzymeWrapper = shallow(
      <ToggleComponent labelOn="Show" labelOff="Hide">
        Teste
      </ToggleComponent>
    );
    expect(enzymeWrapper.text()).not.toContain("Teste");
    enzymeWrapper.find("[data-test='togglecomponent_Hide']").simulate("click");
    expect(enzymeWrapper.text()).toContain("Teste");
  });
});
