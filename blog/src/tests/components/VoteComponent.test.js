import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

import { Vote } from "../../components/votes/Vote";

configure({ adapter: new Adapter() });

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {};
  const enzymeWrapper = shallow(<Vote {...props} />);
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
});
