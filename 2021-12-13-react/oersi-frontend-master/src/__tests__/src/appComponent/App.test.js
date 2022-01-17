import React from "react"
import AppComponent from "../../../App"
import config from "react-global-configuration"
import prod from "../../../config/prod"
import {render} from "../../../setupTests"

const credentialsTest = {
  ELASTIC_SEARCH: {
    URL: "https://scalr.api.appbase.io",
    CREDENTIALS: "cxcxcxcxcx",
    APP_NAME: "oer_test",
  },
}

beforeEach(() => {
  // setup a config file
  config.set(prod)
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

describe("AppComponent ==> Test  ", () => {
  it("AppComponent : should render with credentials error ", async () => {
    try {
      render(<AppComponent data={credentialsTest.ELASTIC_SEARCH} config={config} />)
    } catch (error) {
      expect(error.message).not.toBeNull()
    }
  })
})
