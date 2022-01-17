import React, {Suspense} from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import {registerConfiguration} from "./config/configurationData"
import Configuration from "./components/configuration/Configuration"
import ConfigurationCss from "./components/configurationCss/Configuration-Css"
import "./i18n"

registerConfiguration()

ReactDOM.render(
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <ConfigurationCss />
      <Configuration />
    </Suspense>
  </div>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
