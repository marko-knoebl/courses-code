import React from "react"
import App from "../../App"
import config from "react-global-configuration"
import {Helmet} from "react-helmet"
import i18next from "i18next"
import {withTranslation} from "react-i18next"
import {ConfigurationRunTime} from "../../helpers/use-context"
import {ConfigProvider} from "antd"
import deDE from "antd/es/locale/de_DE"
import enUS from "antd/es/locale/en_US"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import cyan from "@material-ui/core/colors/cyan"
import green from "@material-ui/core/colors/green"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[300],
    },
    secondary: {
      main: green[300],
    },
  },
  overrides: {
    MuiButton: {
      // workaround: need to override hover-color here, because styles from other components (antd, bootstrap) breaks the material-ui-style otherwise
      containedPrimary: {
        "&:hover": {
          color: "rgba(0, 0, 0, 0.87)",
        },
      },
    },
    MuiLink: {
      root: {
        "&:focus": {
          textDecoration: "underline",
          outline: "1px dotted rgba(0, 0, 0, 0.87)",
        },
      },
    },
  },
})

/**
 * Configuration
 * @author Edmond Kacaj <edmondikacaj@gmail.com>
 */
const Configuration = (props) => {
  const {ELASTIC_SEARCH, GENERAL_CONFIGURATION} = window["runTimeConfig"]

  function returnRender() {
    if (ELASTIC_SEARCH !== null && ELASTIC_SEARCH.URL && ELASTIC_SEARCH.APP_NAME) {
      return (
        <ConfigurationRunTime.Provider value={GENERAL_CONFIGURATION}>
          <ConfigProvider locale={i18next.language === "de" ? deDE : enUS}>
            <Helmet>
              <title>{props.t("META.TITLE")}</title>
              <meta name="description" content={props.t("META.DESCRIPTION")} />
              <link rel="canonical" href={GENERAL_CONFIGURATION.PUBLIC_URL} />
            </Helmet>
            <ThemeProvider theme={theme}>
              <App config={config} elasticSearch={ELASTIC_SEARCH} />
            </ThemeProvider>
          </ConfigProvider>
        </ConfigurationRunTime.Provider>
      )
    } else {
      return <div>App configuration is missing! Please check the config-file.</div>
    }
  }

  return returnRender()
}

export default withTranslation()(Configuration)
