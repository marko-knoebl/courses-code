import React from "react"
import {act} from "react-dom/test-utils"
import ReactDOM from "react-dom"
import config from "react-global-configuration"
import App from "../../App"
import prod from "../../config/prod"
import {ConfigurationRunTime} from "../../helpers/use-context"
import i18n from "i18next"
import {initReactI18next} from "react-i18next"

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  // have a common namespace used around the full app
  ns: ["translation"],
  defaultNS: "translation",
  resources: {
    en: {
      lrt: {
        "https://w3id.org/kim/hcrt/video": "Video",
      },
      language: {
        de: "German",
        en: "English",
      },
      audience: {
        "http://purl.org/dcx/lrmi-vocabs/educationalAudienceRole/teacher": "Teacher",
      },
    },
    de: {
      language: {
        de: "Deutsch",
        en: "Englisch",
      },
    },
  },
})

const defaultConfig = {
  GENERAL_CONFIGURATION: {
    FEATURES: {},
  },
}

jest.mock("@appbaseio/reactivesearch", () => ({
  ReactiveBase: jest.fn(({children}) => (
    <div data-testid="ReactiveBase">{children}</div>
  )),
  DataSearch: jest.fn(() => <div />),
  MultiList: jest.fn(() => <div />),
  ReactiveList: jest.fn(() => <div />),
  SelectedFilters: jest.fn(() => <div />),
}))

beforeAll(() => {
  config.set(prod)

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})
afterEach(() => {
  container.remove()
  container = null
})

describe("App", () => {
  const render = (appConfig) => {
    return async () => {
      ReactDOM.render(
        <ConfigurationRunTime.Provider value={appConfig}>
          <App config={config} elasticSearch={{}} />
        </ConfigurationRunTime.Provider>,
        container
      )
    }
  }
  const getFeatureConfig = (features) => {
    let configModified = Object.assign({}, defaultConfig.GENERAL_CONFIGURATION)
    configModified.FEATURES = features
    return configModified
  }

  it("should render without crashing", async () => {
    await act(render(defaultConfig.GENERAL_CONFIGURATION))
    const labelNodes = Array.from(container.querySelectorAll("#top-anchor"))
    expect(labelNodes).toHaveLength(0)
    ReactDOM.unmountComponentAtNode(container)
  })

  it("should include top-anchor, if feature activated", async () => {
    await act(render(getFeatureConfig({SCROLL_TOP_BUTTON: true})))
    const labelNodes = Array.from(container.querySelectorAll("#top-anchor"))
    expect(labelNodes).toHaveLength(1)
    ReactDOM.unmountComponentAtNode(container)
  })
})
