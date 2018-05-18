import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/ui/Header";
function setup() {
  const getCategories = jest.fn();
  const enzymeWrapper = shallow(<Header getCategories={getCategories} />);
  return {
    enzymeWrapper,
    getCategories
  };
}
describe("Header", () => {
  it("renders Header without crashing", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
  it("should call getCategories when componentDidMount lifecycle calls", () => {
    const { getCategories } = setup();
    expect(getCategories).toBeCalled();
  });
});
