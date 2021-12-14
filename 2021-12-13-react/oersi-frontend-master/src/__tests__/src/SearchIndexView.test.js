import React, {Suspense} from "react"
import ReactDOM from "react-dom"
import {act} from "react-dom/test-utils"
import {ConfigurationRunTime} from "../../helpers/use-context"
import config from "react-global-configuration"
import {shallow} from "../../setupTests"
import prod from "../../config/prod"
import {SearchIndexView, ToggleFilterButton} from "../../components/SearchIndexView"

jest.mock("@appbaseio/reactivesearch")
jest.mock("../../components/headerComponent/HeaderComponent", () => () => (
  <div className="header"></div>
))
jest.mock("../../components/resultComponent/ResultComponent", () => () => (
  <div className="result"></div>
))
jest.mock("../../components/filtersComponent/FiltersComponent", () => () => (
  <div className="filters"></div>
))
jest.mock("../../components/filtersComponent/SelectedFiltersComponent", () => () => (
  <div className="selected-filters"></div>
))

function translateDummy(key, options) {
  return key + "_translated"
}
const defaultConfig = {
  PUBLIC_URL: "https://some.url",
  FEATURES: {},
}
beforeEach(() => {
  // setup a config file
  config.set(prod, {freeze: false})
})

describe("SearchIndexView ==> Test UI", () => {
  it("SearchIndexView : should render without crashing", async () => {
    const div = document.createElement("div")
    await act(async () => {
      ReactDOM.render(
        <ConfigurationRunTime.Provider value={defaultConfig}>
          <SearchIndexView multilist={config.get("multiList")} t={translateDummy} />
        </ConfigurationRunTime.Provider>,
        div
      )
    })
    ReactDOM.unmountComponentAtNode(div)
  })

  it("SearchIndexView : should render without crashing in mobile view", async () => {
    const div = document.createElement("div")
    await act(async () => {
      ReactDOM.render(
        <ConfigurationRunTime.Provider value={defaultConfig}>
          <SearchIndexView
            isMobile={true}
            multilist={config.get("multiList")}
            t={translateDummy}
          />
        </ConfigurationRunTime.Provider>,
        div
      )
    })
    ReactDOM.unmountComponentAtNode(div)
  })

  it("SearchIndexView : should render toggle filter button", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ToggleFilterButton
        showFilter={true}
        toggleShowFilterButton={() => true}
        t={translateDummy}
      />,
      div
    )
    const labelNodes = div.querySelectorAll(".MuiButton-label")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).toContain("FILTER.HIDE_FILTER_translated")
    ReactDOM.unmountComponentAtNode(div)
  })
  it("SearchIndexView : should render toggle filter button, hidden filters", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ToggleFilterButton
        showFilter={false}
        toggleShowFilterButton={() => true}
        t={translateDummy}
      />,
      div
    )
    const labelNodes = div.querySelectorAll(".MuiButton-label")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).toContain("FILTER.SHOW_FILTER_translated")
    ReactDOM.unmountComponentAtNode(div)
  })
  it("Test click on toggle filter button", () => {
    const mockCallBack = jest.fn()
    const toggleButton = shallow(
      <ToggleFilterButton
        showFilter={false}
        toggleShowFilterButton={mockCallBack}
        t={translateDummy}
      />
    )
    toggleButton.find(".toggle-filter-button").simulate("click")
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it("SearchIndexView : should render with hidden filter", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig}>
        <SearchIndexView
          showFilter={false}
          multilist={config.get("multiList")}
          t={translateDummy}
        />
      </ConfigurationRunTime.Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
