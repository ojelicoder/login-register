import React from "react";
import Button from "../../../components/atoms/Button";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

const btnProps = {
  type: "primary",
  label: "general.login",
};

describe("Button", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Button {...btnProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Renders with a className equal to the props", () => {
    const { container } = render(<Button {...btnProps} />);
    expect(container.getElementsByClassName("btn-primary").length).toBe(1);
  });
});
