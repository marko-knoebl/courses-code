import React from "react"
import ReactDOM from "react-dom"
import {
  SelectedFiltersComponent,
  renderSelectedFilters,
} from "../../../components/filtersComponent/SelectedFiltersComponent"

jest.mock("@appbaseio/reactivesearch")

function translateDummy(key, options) {
  return key + "_translated"
}

describe("FiltersComponent ==> Test UI  ", () => {
  it("SelectedFilters : should render", () => {
    const div = document.createElement("div")
    ReactDOM.render(<SelectedFiltersComponent t={translateDummy} />, div)
  })

  it("SelectedFilters : should render for no selected filter", () => {
    const data = {
      selectedValues: [],
    }
    let result = renderSelectedFilters(data, translateDummy)
    const div = document.createElement("div")
    ReactDOM.render(result, div)
    expect(div.querySelector("button")).toBeNull()
  })

  it("SelectedFilters : should render selected filters", () => {
    const data = {
      selectedValues: {
        filter1: {
          showFilter: true,
          label: "filter1",
          value: "value1",
        },
        filter2: {
          showFilter: true,
          label: "filter2",
          value: ["value1", "value2"],
        },
        filter3: {
          showFilter: false,
          label: "filter3",
          value: "value3",
        },
        unused1: {
          showFilter: true,
          label: "filter4",
          value: "value4",
        },
        invalid1: {
          showFilter: true,
          value: "value4",
        },
        invalid2: {
          showFilter: true,
          label: "filter4",
        },
      },
      components: ["filter1", "filter2", "filter3", "invalid1", "invalid2"],
    }
    let result = renderSelectedFilters(data, translateDummy)
    const div = document.createElement("div")
    ReactDOM.render(result, div)
    const buttonLabelNodes = div.querySelectorAll("button .MuiButton-label")
    expect(buttonLabelNodes).not.toBeNull()
    const buttonLabels = Array.from(buttonLabelNodes.values()).map(
      (e) => e.textContent
    )
    expect(buttonLabels).toContain("LABEL.FILTER1_translated: value1")
    expect(buttonLabels).toContain("LABEL.FILTER2_translated: value1, value2")
    expect(buttonLabels).not.toContain("LABEL.FILTER3_translated: value3")
    expect(buttonLabels).not.toContain("LABEL.FILTER4_translated: value4")
    expect(buttonLabels.length).toEqual(3)
  })
})
