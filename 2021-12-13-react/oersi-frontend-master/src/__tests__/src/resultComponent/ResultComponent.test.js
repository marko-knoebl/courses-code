import React from "react"
import {shallow} from "../../../setupTests"
import {registerConfiguration} from "../../../config/configurationData"
import ResultComponent from "../../../components/resultComponent/ResultComponent"

describe("ResultComponent ==> Test UI  ", () => {
  registerConfiguration()
  const wrapperShadow = shallow(<ResultComponent />)
  it("ResultComponent : should render correctly", () => {
    expect(wrapperShadow).toMatchSnapshot()
  })
})
