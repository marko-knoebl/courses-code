import {createMount} from "@material-ui/core/test-utils"
import React from "react"
import {ScrollTop} from "../../../helpers/ScrollTop"
import {Fab} from "@material-ui/core"

let mount
afterAll(() => {
  mount.cleanUp()
})
beforeAll(() => {
  mount = createMount()
})
describe("ScrollTop", () => {
  it("ScrollTop click", () => {
    const wrapper = mount(<ScrollTop />)

    let scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    const button = wrapper.find(Fab).first()
    button.simulate("click")

    expect(scrollIntoViewMock).toBeCalled()
  })
})
