import React from "react"
import ReactDOM from "react-dom"
import {act} from "react-dom/test-utils"
import Configuration from "../../../components/configurationCss/Configuration-Css"

const testCss = `
    hr {
      margin: 5px 0px 0px 0px;
    }
`

global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve(testCss),
  })
)
// jest.setTimeout(3000);
let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

describe("Configuration ==> Test UI  ", () => {
  it("Configuration : should render without crashing", async () => {
    const div = document.createElement("div")
    await act(async () => {
      ReactDOM.render(<Configuration />, div)
    })

    ReactDOM.unmountComponentAtNode(div)
  })
})
