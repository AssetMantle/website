import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_BN } from "./bn/translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: TRANSLATIONS_EN,
      },
      bn: {
        translations: TRANSLATIONS_BN,
      },
    },
  });

// i18n.changeLanguage("bn");
