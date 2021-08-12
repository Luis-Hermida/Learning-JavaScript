import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AuthorQuiz from "./AuthorQuiz";
import { render } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const state = {
  turnData: {
    books: [
      "The Shining",
      "IT",
      "David Copperfield",
      "A Tale of Two Cities",
      "Hamlet"
    ],
    author: {
      name: "Charles Dickens",
      imageUrl: "images/authors/charlesdickens.jpg",
      imageSource: "Wikimedia Commons",
      books: ["David Copperfield", "A Tale of Two Cities"]
    }
  },
  highlight: "none"
};

function onAnswerSelected(answer) {
  return "";
}

const authorQuizComponent = (
  <BrowserRouter>
    <AuthorQuiz />
  </BrowserRouter>
);

test("renders AuthorQuiz title", () => {
  const { getByText } = render(authorQuizComponent);
  const title = getByText(/Author Quiz/i);
  expect(title).toBeInTheDocument();
});

describe("Author Quiz", () => {
  Enzyme.configure({ adapter: new Adapter() });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(authorQuizComponent, div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(authorQuizComponent);
    });

    it("Should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        ""
      );
    });
  });

  describe("When the wrong answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <BrowserRouter>
          <AuthorQuiz
            {...Object.assign({}, state, { highlight: "wrong" })}
            onAnswerSelected={onAnswerSelected}
          />
        </BrowserRouter>
      );
    });

    it("Should have a red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "#ff4c4c"
      );
    });
  });

  describe("When the correct answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <BrowserRouter>
          <AuthorQuiz
            {...Object.assign({}, state, { highlight: "correct" })}
            onAnswerSelected={onAnswerSelected}
          />
        </BrowserRouter>
      );
    });

    it("Should have a red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "#bced91"
      );
    });
  });

  describe("When the first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      wrapper = mount(
        <BrowserRouter>
          <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />
        </BrowserRouter>
      );
      wrapper
        .find(".answer")
        .first()
        .simulate("click");
    });

    it("onAnswerSelected should be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Shining", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
    });
  });
});
