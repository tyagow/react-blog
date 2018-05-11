import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/ui/Header";
function setup() {
  const enzymeWrapper = shallow(<Header />);
  return {
    enzymeWrapper
  };
}
describe("Header", () => {
  it("renders Header without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
