import React, {useState, useEffect} from "react"
import "./FooterComponent.css"
import {withTranslation} from "react-i18next"
import {getRequest} from "../../service/configuration/configurationService"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import {getRequestWithLanguage} from "../../helpers/helpers"

/**
 * This is the Footer component, You can use different url and image after Build
 * use Fetsch to call public/footer/config.json to load data
 * @author Edmond Kacaj <edmondikacaj@gmail.com>
 */

const FooterComponent = () => {
  const [data, setdata] = useState("")
  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      await getRequestWithLanguage(callBackForRequest)
    }
    fetchData()
  }, [])

  async function callBackForRequest(lang) {
    const result = await getRequest(`/footer/${lang}/footer.html`)
    if (result.status === 200) {
      const htmlResponse = await result.text()
      if (
        !htmlResponse.includes("html") ||
        !htmlResponse.includes("head") ||
        !htmlResponse.includes("body")
      ) {
        setdata(htmlResponse)
        setisLoaded(true)
        return true
      } else {
        setisLoaded(false)
        return false
      }
    } else {
      return false
    }
  }

  return <div data-insert-template-id="footer-id">{isLoaded && parse(data)}</div>
}

FooterComponent.propTypes = {
  data: PropTypes.object,
  isLoaded: PropTypes.bool,
}

export default withTranslation()(FooterComponent)
