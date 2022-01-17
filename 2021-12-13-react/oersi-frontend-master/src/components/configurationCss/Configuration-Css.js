import React, {useEffect} from "react"
import {getRequest} from "../../service/configuration/configurationService"

/**
 * Component to override Css
 * @author Edmond Kacaj <edmondikacaj@gmail.com>
 */
const ConfigurationCss = () => {
  useEffect(() => {
    async function fetchData() {
      const res = await getRequest("/css/style-override.css")
      const json = await res.text()
      if (json != null) {
        loadExternalStyles(json)
      }
    }
    fetchData()
  }, [])

  return <div></div>

  function loadExternalStyles(style) {
    var head = document.getElementsByTagName("head")[0]
    var styleElement = document.createElement("style")
    styleElement.type = "text/css"
    styleElement.className = "custom-style"
    styleElement.innerHTML = style !== "" ? style : ""
    head.appendChild(styleElement)
    return true
  }
}

export default ConfigurationCss
