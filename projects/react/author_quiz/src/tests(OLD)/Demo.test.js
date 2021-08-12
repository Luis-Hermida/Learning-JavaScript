import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

function Hello(props) {
  return <h1> Hello at {props.time} </h1>;
}
const moment = new Date(1588946400000);

// describe("Failed test", () => {
//   it("Should fail", () => {
//     expect(1 + 1).toBe(3);
//   });
//   it("Should pass", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

describe("Testing component directly", () => {
  let result;
  beforeAll(() => {
    result = Hello({ time: moment.toISOString() });
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("return an h1 tag", () => {
    expect(result.type).toBe("h1");
  });

  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe("Testing ReactDOM", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello time={moment.toISOString()} />, div);
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe("Testing with Enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Hello time={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("contains Hello at 2020-05-08T14:00:00.000Z", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.000Z</h1>));
  });
});
