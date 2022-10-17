import React from "react";
import { useState } from "react";
import TabHeader from "../../molecules/TabHeader";
import PropTypes from "prop-types";

const Tab = ({ children }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="tab">
        <TabHeader
          selected={selected}
          setSelected={setSelected}
          child={children}
        />
        <div className="tab-content">{children[selected]}</div>
      </div>
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.array,
};

export default Tab;
