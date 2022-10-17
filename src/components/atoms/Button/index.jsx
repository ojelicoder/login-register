import React from "react";
import { t } from "i18next";
import PropTypes from "prop-types";

const Button = ({ type, customClass, backgroundColor, label, ...props }) => {
  const classEnum = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    light: "btn btn-light",
    tabHeaderBtn: `tab-header_btn ${customClass}`,
  };

  return (
    <button
      type="button"
      className={[classEnum[type]].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {t(label)}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  customClass: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  type: "primary" || "secondary",
  size: "medium",
  onClick: undefined,
};

export default Button;
