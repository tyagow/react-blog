import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NotFoundPage from "../../containers/NotFoundPage";
import { RingLoader } from "react-spinners";

configure({ adapter: new Adapter() });

describe("NotFoundPage", () => {
  it("renders NotFoundPage without crashing", () => {
    expect(shallow(<NotFoundPage />)).toMatchSnapshot();
  });
  it("should render spinner component if state == loading", () => {
    const enzymeWrapper = shallow(<NotFoundPage />);
    const spinner = enzymeWrapper.find(RingLoader);
    expect(spinner.length).toBe(1);
  });
});
