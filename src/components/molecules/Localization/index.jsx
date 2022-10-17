import React from "react";
import Button from "../../atoms/Button";
import { useTranslation } from "react-i18next";

const Localization = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="localization">
      <Button
        type="light"
        label={t("general.localization.tr")}
        onClick={() => i18n.changeLanguage("tr")}
      />
      <Button
        type="light"
        label={t("general.localization.en")}
        onClick={() => i18n.changeLanguage("en")}
      />
    </div>
  );
};

export default Localization;
