import React, {useState} from "react"
import {withTranslation} from "react-i18next"
import {ConfigurationRunTime} from "../../helpers/use-context"
import i18next from "i18next"
import "./cookie.css"
import {getPrivacyPolicyLinkForLanguage} from "../../helpers/helpers"
import {useCookies} from "react-cookie"

/**
 * @author Edmond Kacaj <edmondikacaj@gmail.com>
 * @param {*} props properties
 */
const Cookie = (props) => {
  const {PRIVACY_POLICY_LINK} = React.useContext(ConfigurationRunTime)
  const [cookies, setCookie] = useCookies(["oerndsCookieInfoDismissed"])
  const [visible, setVisible] = useState(!Boolean(cookies.oerndsCookieInfoDismissed))

  const onDismissCookieInfo = () => {
    setCookie("oerndsCookieInfoDismissed", true, {
      path: process.env.PUBLIC_URL,
      maxAge: 365 * 24 * 60 * 60 * 1000,
    })
    setVisible(false)
  }

  return (
    <div id="toast" className={visible === true ? "show" : "hide"}>
      <div id="desc">
        <div id="cookieConsent">
          {props.t("COOKIE.TITLE")}
          {getPrivacyPolicyLinkForLanguage(
            PRIVACY_POLICY_LINK,
            i18next.language,
            i18next.languages
          ) !== undefined && (
            <a
              href={getPrivacyPolicyLinkForLanguage(
                PRIVACY_POLICY_LINK,
                i18next.language,
                i18next.languages
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.t("COOKIE.MORE_INFO")}
            </a>
          )}
          <button onClick={onDismissCookieInfo} className="cookieConsentOK">
            {props.t("COOKIE.BUTTON_ACCEPT")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Cookie)
