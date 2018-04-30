import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { Header, mapStateToProps } from "../../components/ui/Header";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
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
