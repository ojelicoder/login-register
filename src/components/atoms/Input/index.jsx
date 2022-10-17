import React from "react";
import { t } from "i18next";
import PropTypes from "prop-types";

const Input = ({ label, onChange, value, ...props }) => {
  return (
    <input
      placeholder={t(label)}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
