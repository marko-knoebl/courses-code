import React from "react"
import EmbedDialog from "../../../components/resultComponent/EmbedDialog"
import ReactDOM from "react-dom"
import Dialog from "@material-ui/core/Dialog"
import {createMount, createShallow} from "@material-ui/core/test-utils"

let dummyData = {
  id: 1,
  name: "Test",
  licenseGroup: "by-sa",
  license: {
    id: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  creator: [
    {
      id: null,
      name: "Max Mustermann",
      type: "Person",
    },
  ],
}

function translateDummy(key, options) {
  return key + "_translated"
}
const closeMock = jest.fn()

let container = null
let shallow
let mount
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})
afterAll(() => {
  mount.cleanUp()
})
beforeAll(() => {
  shallow = createShallow({dive: true})
  mount = createMount()
})
describe("EmbedDialog", () => {
  it("EmbedDialog should render", () => {
    ReactDOM.render(
      <EmbedDialog
        open={true}
        onClose={closeMock}
        data={{...dummyData}}
        t={translateDummy}
      />,
      container
    )
    ReactDOM.unmountComponentAtNode(container)
  })
  it("Test click on copy button", () => {
    navigator.clipboard = jest.fn(() => true)
    navigator.clipboard.writeText = jest.fn((text) => true)
    const wrapper = shallow(
      <EmbedDialog
        open={true}
        onClose={closeMock}
        data={{...dummyData}}
        t={translateDummy}
      />
    )

    const button = wrapper.find(Dialog).dive().find(".embed-dialog-copy-button")
    button.simulate("click")
    expect(
      wrapper.find(Dialog).dive().find(".embed-dialog-copy-done-button").length
    ).toEqual(1)
  })
  it("Test click on code tab", () => {
    const wrapper = mount(
      <EmbedDialog
        open={true}
        onClose={closeMock}
        data={{...dummyData}}
        t={translateDummy}
      />
    )

    const button = wrapper.find(".embed-dialog-tab-code").first()
    button.simulate("click")
    expect(wrapper.find(".embed-dialog-textarea").length).toEqual(1)
    const tabpanelCodeHtml = wrapper
      .find(".embed-dialog-tabpanel-code")
      .first()
      .html()
    expect(tabpanelCodeHtml).not.toContain("hidden")
  })
})
