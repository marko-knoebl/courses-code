import React, {Suspense} from "react"
import ReactDOM from "react-dom"
import {act} from "react-dom/test-utils"
import Configuration from "../../../components/configuration/Configuration"
import config from "react-global-configuration"
import prod from "../../../config/prod"
import {I18nextProvider} from "react-i18next"
import i18n from "../../../i18n"
import i18next from "i18next"
import {ConfigurationRunTime} from "../../../helpers/use-context"

window["runTimeConfig"] = {
  ELASTIC_SEARCH: {
    URL: "http://1tes.com",
    CREDENTIALS: "Basic s223H6DS=DSShdjsd6dsDS6",
    APP_NAME: "test_data",
  },
  GENERAL_CONFIGURATION: {},
}

let container = null
beforeAll(() => {
  config.set(prod)
})
beforeEach(() => {
  // setup a DOM element as a render target and configuration for reactiveSearch
  container = document.createElement("div")
  document.body.appendChild(container)
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

describe("Configuration ==> Test UI  ", () => {
  it("Configuration : should render without crashing", async () => {
    i18next.changeLanguage("en")
    await act(async () => {
      ReactDOM.render(
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <ConfigurationRunTime.Provider value={window["runTimeConfig"]}>
              <Configuration />
            </ConfigurationRunTime.Provider>
          </Suspense>
        </I18nextProvider>,
        container
      )
    })
    ReactDOM.unmountComponentAtNode(container)
  })

  it("Configuration : should render without crashing for German translation", async () => {
    i18next.changeLanguage("de")
    await act(async () => {
      ReactDOM.render(
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <ConfigurationRunTime.Provider value={window["runTimeConfig"]}>
              <Configuration />
            </ConfigurationRunTime.Provider>
          </Suspense>
        </I18nextProvider>,
        container
      )
    })
    ReactDOM.unmountComponentAtNode(container)
  })

  it("Configuration : should render without crashing for undefined elasticsearch", async () => {
    window["runTimeConfig"].ELASTIC_SEARCH = null
    i18next.changeLanguage("en")
    await act(async () => {
      ReactDOM.render(
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<div>Loading translations...</div>}>
            <ConfigurationRunTime.Provider value={window["runTimeConfig"]}>
              <Configuration />
            </ConfigurationRunTime.Provider>
          </Suspense>
        </I18nextProvider>,
        container
      )
    })
    ReactDOM.unmountComponentAtNode(container)
  })
})
