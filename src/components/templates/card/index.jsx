import React from "react";
import Login from "../../molecules/Login";
import Register from "../../molecules/Register";
import Tab from "../../organisms/Tab";

const Card = () => {
  return (
    <div className="card">
      <Tab>
        <div title={"general.login"}>
          <Login />
        </div>
        <div title={"general.register"}>
          <Register />
        </div>
      </Tab>
    </div>
  );
};

export default Card;
