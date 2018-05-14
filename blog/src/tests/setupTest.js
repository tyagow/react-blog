import raf from "./shim.js";
import { shallow, render, mount, configure } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};

configure({ adapter: new Adapter() });

const middlewares = [thunk];
global.mockStore = configureStore(middlewares);
