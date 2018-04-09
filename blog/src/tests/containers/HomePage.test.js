import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HomePage from "../../containers/HomePage";

configure({ adapter: new Adapter() });

describe("Homepage component should render Posts and PostForm components ", () =>
  it("renders homepage without crashing", () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  }));
