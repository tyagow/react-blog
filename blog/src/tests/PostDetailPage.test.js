import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PostDetailPage from "../containers/PostDetailPage";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  expect(
    shallow(<PostDetailPage match={{ params: { postId: 1 } }} />)
  ).toMatchSnapshot();
});
