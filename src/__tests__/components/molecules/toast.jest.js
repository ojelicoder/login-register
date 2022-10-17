import React from "react";
import Toast from "../../../components/molecules/Toast";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Toast", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Toast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Renders with a className equal to the props", () => {
    const toastProps = {
      type: "success",
      message: "general.message.toaster.login.success",
    };
    const { container } = render(<Toast {...toastProps} />);
    expect(container.getElementsByClassName("toast-success").length).toBe(1);
  });
});
