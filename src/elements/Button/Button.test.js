import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click if isDisabled is present", () => {
  const { container } = render(<Button isDisabled={true}></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/Loading.../i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <link> component", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
