import React, {useState, useEffect} from "react"
import {ReactiveBase} from "@appbaseio/reactivesearch"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./App.css"
import Cookie from "./components/cookieComponent/Cookie"
import Contact from "./components/contact/Contact"
import FooterComponent from "./components/footerComponent/FooterComponent"
import HeaderComponent from "./components/headerComponent/HeaderComponent"
import ResourceDetails from "./components/resourceDetails/ResourceDetails"
import SearchIndexView from "./components/SearchIndexView"
import {ScrollTop} from "./helpers/ScrollTop"
import {ConfigurationRunTime} from "./helpers/use-context"

const App = (props) => {
  const context = React.useContext(ConfigurationRunTime)
  const [multilist] = useState(props.config.get("multiList"))
  // breakpoints - see https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
  const isMobileOrTablet = useMedia("(max-width: 991.98px)")

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ReactiveBase
        className="reactive-base"
        app={props.elasticSearch.APP_NAME}
        url={props.elasticSearch.URL}
        headers={getAuthorizationHeaderIfCredentialsExist(
          props.elasticSearch.CREDENTIALS
        )}
      >
        <HeaderComponent />
        {context.FEATURES.SCROLL_TOP_BUTTON && <ScrollTop />}
        <Switch>
          <Route exact path="/">
            <SearchIndexView isMobile={isMobileOrTablet} multilist={multilist} />
          </Route>
          <Route exact path="/services/contact" component={Contact} />
          <Route
            exact
            path="(/details)?/:resourceId([A-Za-z0-9-_=]{12,})"
            component={ResourceDetails}
          />
        </Switch>
        <FooterComponent />
        <Cookie />
      </ReactiveBase>
    </Router>
  )

  /**
   * function that returns the authorization-header if credentials exist
   * @param {String} credentials
   */
  function getAuthorizationHeaderIfCredentialsExist(credentials) {
    if (credentials !== "" && credentials) return {authorization: credentials}
    else return null
  }

  function useMedia(query) {
    const [matches, setMatches] = useState(false)

    // Activity normally for componentDidMount + componentDidUpdate
    useEffect(() => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      const listener = () => setMatches(media.matches)
      media.addListener(listener)

      return () => media.removeListener(listener)
    }, [query, matches])

    // publish value for render
    return matches
  }
}

export default App
