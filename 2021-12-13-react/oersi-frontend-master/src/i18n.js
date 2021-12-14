import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import Backend from "i18next-chained-backend"
import HttpApi from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import LocalStorageBackend from "i18next-localstorage-backend"

const fallbackLng = ["en", "de"]
const {GENERAL_CONFIGURATION} = window["runTimeConfig"]
  ? window["runTimeConfig"]
  : {
      GENERAL_CONFIGURATION: {
        I18N_CACHE_EXPIRATION: 600000,
        I18N_DEBUG: false,
      },
    }

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: GENERAL_CONFIGURATION.I18N_DEBUG,
    backend: {
      backends: [LocalStorageBackend, HttpApi],
      backendOptions: [
        {
          expirationTime: GENERAL_CONFIGURATION.I18N_CACHE_EXPIRATION,
        },
        {
          // for all available options read the backend's repository readme file
          loadPath: (lng, namespaces) => {
            switch (namespaces[0]) {
              case "audience":
              case "lrt":
              case "subject":
                return `${process.env.PUBLIC_URL}/api-internal/label/{{lng}}?vocab={{ns}}`
              default:
                return `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
            }
          },
        },
      ],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
