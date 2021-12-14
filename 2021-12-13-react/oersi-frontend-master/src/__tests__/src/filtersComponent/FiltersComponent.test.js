import React from "react"
import {render} from "@testing-library/react"
import FiltersComponent from "../../../components/filtersComponent/FiltersComponent"

jest.mock("../../../components/multiListComponent/MultiListComponent", () => () => (
  <div className="multiList"></div>
))

function translateDummy(key, options) {
  return key + "_translated"
}

describe("FiltersComponent ==> Test UI", () => {
  it("FiltersComponent : should render with empty list", () => {
    const {container} = render(
      <FiltersComponent t={translateDummy} multilist={[]} />
    )
  })

  it("FiltersComponent : should render", () => {
    const multilist = [{component: "filter1"}, {component: "filter2"}]
    const {container} = render(
      <FiltersComponent t={translateDummy} multilist={multilist} />
    )
    const filterElements = Array.from(container.querySelectorAll(".multiList"))
    expect(filterElements).toHaveLength(2)
  })
})
