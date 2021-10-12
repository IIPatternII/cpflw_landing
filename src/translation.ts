import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      es: {
        translations: translationEs,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;