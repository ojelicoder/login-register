import React from "react";
import { useTranslation } from "react-i18next";
import Localization from "../../components/molecules/Localization";
import Card from "../../components/templates/card";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { i18n } = useTranslation();

  return (
    <div className="container">
      <Localization />
      <Card />
    </div>
  );
};

export default Home;
