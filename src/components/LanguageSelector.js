import React from "react";
import { changeLanguage } from "../api/apiCalls";
import { withTranslation } from "react-i18next";
import turkishFlag from "../pictures/turkish.svg";
import americanAMK from "../pictures/usa.svg";
const LanguageSelector = (props) => {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };
  return (
    <div className="container">
      <img
        height={25}
        width={25}
        src={turkishFlag}
        alt="Turkish Flag"
        onClick={() => onChangeLanguage("tr")}
        style={{ cursor: "pointer" }}
      />
      <img
        src={americanAMK}
        height={25}
        width={25}
        alt="USA Flag"
        onClick={() => onChangeLanguage("en")}
        style={{ cursor: "pointer", marginLeft: "2px" }}
      />
    </div>
  );
};

export default withTranslation()(LanguageSelector);
