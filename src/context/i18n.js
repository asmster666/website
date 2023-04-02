import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import data from './strings';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      // we init with resources
    resources: { 
      eng: data.eng,
      ru: data.ru,
    },
    fallbackingLng: "eng",
    debug: false,

    // have a common namespace used around the full app
    ns: [""],
    defaultNS: "",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });