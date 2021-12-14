import React from "react"
import ReactDOM from "react-dom"
import {act} from "react-dom/test-utils"
import Cookie from "../../../components/cookieComponent/Cookie"
import {Provider} from "react-redux"
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import configureStore from "redux-mock-store"
import {ConfigurationRunTime} from "../../../helpers/use-context"

const fakeTranslated = {
  COOKIE: {
    TITLE:
      "Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu gewährleisten. Durch die Nutzung dieser Website erklären Sie sich mit dieser Nutzung einverstanden.",
    MORE_INFO: "Mehr Info",
    BUTTON_ACCEPT: "Akzeptiere",
  },
}

window["runTimeConfig"] = {
  ELASTIC_SEARCH: {},
  GENERAL_CONFIGURATION: {
    PRIVACY_POLICY_LINK: [
      {path: "en/privacyPolicy.html", language: "en"},
      {path: "en/privacyPolicy.html", language: "de"},
      {path: "http://my-domain.de/", language: "sq"},
    ],
  },
}

const mockStore = configureStore([])
const store = mockStore({})

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: ["en", "de", "sq", "fr"],

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: {
    en: {translations: fakeTranslated},
  },
})
let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

describe("Cookie ==> Test UI  ", () => {
  it("Cookie : should render without crashing ", () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })

    ReactDOM.unmountComponentAtNode(container)
  })

  it("Cookie : should be translated ", () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })
    const labelNodes = container.querySelector("#cookieConsent").textContent
    expect(labelNodes).toMatch(fakeTranslated.COOKIE.TITLE)
    ReactDOM.unmountComponentAtNode(container)
  })
  it("Cookie : should be have a link in base of language 'en' ", () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })

    const labelNodes = container.querySelector("#cookieConsent > a")
    expect(labelNodes.href.replace("http://localhost/", "")).toEqual(
      window["runTimeConfig"].GENERAL_CONFIGURATION.PRIVACY_POLICY_LINK[0].path
    )
    ReactDOM.unmountComponentAtNode(container)
  })

  it("Cookie : should be have a link in base of language 'de' ", () => {
    i18next.changeLanguage("de")
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })
    const labelNodes = container.querySelector("#cookieConsent > a")
    expect(labelNodes.href.replace("http://localhost/", "")).toEqual(
      window["runTimeConfig"].GENERAL_CONFIGURATION.PRIVACY_POLICY_LINK[1].path
    )
    ReactDOM.unmountComponentAtNode(container)
  })

  it("Cookie : should go to fallback language for language 'non' ", () => {
    i18next.changeLanguage("non")
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })
    const labelNodes = container.querySelector("#cookieConsent > a")
    expect(labelNodes.href.replace("http://localhost/", "")).toEqual(
      window["runTimeConfig"].GENERAL_CONFIGURATION.PRIVACY_POLICY_LINK[0].path
    )
    ReactDOM.unmountComponentAtNode(container)
  })

  it("Cookie : should have a link for language 'sq' ", () => {
    i18next.changeLanguage("sq")
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })
    const labelNodes = container.querySelector("#cookieConsent > a")
    expect(labelNodes.href).toEqual(
      window["runTimeConfig"].GENERAL_CONFIGURATION.PRIVACY_POLICY_LINK[2].path
    )
    ReactDOM.unmountComponentAtNode(container)
  })
  it("Cookie : Should return undefined for empty links ", () => {
    i18next.changeLanguage("sq")
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider value={{PRIVACY_POLICY_LINK: []}}>
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })
    const labelNodes = container.querySelector("#cookieConsent > a")
    expect(labelNodes).toEqual(null)
    ReactDOM.unmountComponentAtNode(container)
  })

  it("Cookie : Should accept the cookie, oerndsCookieInfoDismissed=true ", () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <ConfigurationRunTime.Provider
              value={window["runTimeConfig"].GENERAL_CONFIGURATION}
            >
              <Cookie />
            </ConfigurationRunTime.Provider>
          </I18nextProvider>
        </Provider>,
        container
      )
    })
    const labelNodes = container.querySelector("#cookieConsent > button")
    labelNodes.click()
    expect(document.cookie).toEqual("oerndsCookieInfoDismissed=true")
    ReactDOM.unmountComponentAtNode(container)
  })
})
