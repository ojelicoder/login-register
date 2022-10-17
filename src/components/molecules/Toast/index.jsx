import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { t } from "i18next";

const Toast = (props) => {
  const [toastShow, setToastShow] = useState(true),
    { message, type, toastClosed } = props;

  useEffect(() => {
    setToastShow(false);

    setTimeout(() => {
      setToastShow(false);
      toastClosed();
    }, 2000);
  }, [toastClosed]);

  return (
    <div className={toastShow ? "toast" : "toast in"}>
      <div className={type === "success" ? "toast-success" : "toast-error"}>
        <div className="toast_content">{t(message)}</div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  toastClosed: PropTypes.func,
};

export default Toast;
