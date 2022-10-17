import React from "react";
import Button from "../../atoms/Button";
import PropTypes from "prop-types";

const TabHeader = ({ selected, setSelected, child }) => {
  return (
    <div className="tab-header">
      {child.map((item, index) => (
        <Button
          key={index}
          type={"tabHeaderBtn"}
          label={item.props.title}
          onClick={() => setSelected(index)}
          customClass={[
            index == 0 ? "tab-header_btn_primary" : "tab-header_btn_secondary",
            index === selected ? "selected" : "",
          ].join(" ")}
        />
      ))}
    </div>
  );
};

TabHeader.propTypes = {
  selected: PropTypes.number,
  setSelected: PropTypes.func,
  child: PropTypes.array,
};

export default TabHeader;
