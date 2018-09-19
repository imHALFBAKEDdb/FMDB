import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../src/components/App.jsx";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

// this is where we reference the adapter package we installed
// earlier
// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new Adapter() });

it("App should render", () => {
  const div = document.createElement(div);
  ReactDOM.render(<App />, div);
});

it("App container should exist", () => {
  const component = shallow(<App />);
  expect(component.find(".container")).toBeTruthy();
});
