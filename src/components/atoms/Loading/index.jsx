import React from "react";
import PropTypes from "prop-types";

const Loading = ({ type }) => {
  return (
    <div className="loader-wrapper">
      <svg>
        <circle cx="70" cy="70" r="50" className={type}></circle>
      </svg>
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
};

export default Loading;
