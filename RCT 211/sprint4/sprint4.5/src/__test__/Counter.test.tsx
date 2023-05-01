import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("test cases for counter app", () => {
  it("should render compo", () => {
    render(<App />);
    const counterComp = screen.getByTestId("counter");
    expect(counterComp).toBeInTheDocument();
  });
  it("should have heading 'Counter App'", () => {
    render(<App />);
    const counterHeading = screen.getByTestId("heading");
    expect(counterHeading).toBeInTheDocument();
    expect(counterHeading).toHaveTextContent("Counter App");
  });
  it("should have default text", () => {
    render(<App />);
    const counterText = screen.getByTestId("body");
    expect(counterText).toBeInTheDocument();
    expect(counterText).toHaveTextContent("Count : 0");
  });
  it("button should render in the dom", () => {
    render(<App />);
    const buttons = screen.getAllByTestId("button");
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[0]).toHaveTextContent("Add");
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent("Reduce");
  });
  it("add button should render and call correct fun", () => {
    const mockFun = jest.fn();
    render(
      <button data-testid="button" onClick={mockFun}>
        Add
      </button>
    );
    const addButton = screen.getAllByTestId("button");
    fireEvent.click(addButton[0]);
    expect(mockFun).toBeCalled();
  });
  it("reduce button should render and call correct fun", () => {
    const mockFun = jest.fn();
    render(
      <button data-testid="button" onClick={mockFun}>
        Reduce
      </button>
    );
    const reduceButton = screen.getAllByTestId("button");
    fireEvent.click(reduceButton[0]);
    expect(mockFun).toBeCalled();
  });
  it("add button should work properly", () => {
    render(<App />);
    const addButton = screen.getAllByTestId("button");
    const defVal = screen.getByTestId("body");
    expect(defVal).toHaveTextContent("Count : 0");
    fireEvent.click(addButton[0]);
    fireEvent.click(addButton[0]);
    fireEvent.click(addButton[0]);
    fireEvent.click(addButton[0]);
    fireEvent.click(addButton[0]);
    expect(defVal).toHaveTextContent("Count : 5");
  });
  it("reduce button should work properly", () => {
    render(<App />);
    const redButton = screen.getAllByTestId("button");
    const defVal = screen.getByTestId("body");
    expect(defVal).toHaveTextContent("Count : 0");
    fireEvent.click(redButton[1]);
    fireEvent.click(redButton[1]);
    fireEvent.click(redButton[1]);
    fireEvent.click(redButton[1]);
    fireEvent.click(redButton[1]);
    expect(defVal).toHaveTextContent("Count : -5");
  });
});
