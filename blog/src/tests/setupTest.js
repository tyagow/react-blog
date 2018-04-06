import { shallow, render, mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

export default mockStore;
