import i18next from "i18next"
import moment from "moment"
import "moment/locale/de"

/**
 * function to get the location and return a value for  specific query parameters
 * @param {windows.location} location Get location
 * @param {string} queryToSearch String to check if exist or not in URL example: queryToSearch="pageSize"
 */
export default function getParams(location, queryToSearch) {
  const searchParams = new URLSearchParams(location.search)
  if (searchParams.has(queryToSearch) === true)
    return searchParams.get(queryToSearch)
  else return null
}

/**
 *
 * @param {windows.location} location Get location
 * @param {Object} queryToInsertUpdate Contain key/value for setting or Ubdating Params in URL example {name:'size',value:5}
 */
export function setParams(location, queryToInsertUpdate) {
  const addUpdateParams = new URLSearchParams(location.search)
  addUpdateParams.set(queryToInsertUpdate.name, queryToInsertUpdate.value)
  return addUpdateParams
}

/**
 * Retrieve the (translated) label for the given component.
 */
export function getLabelForStandardComponent(label, component, translateFnc) {
  if (label === "N/A") {
    return translateFnc("LABEL.N/A")
  } else if (component === "language") {
    return translateFnc("language:" + label)
  } else if (component === "license") {
    return getLicenseGroupById(label).toUpperCase()
  } else if (component === "learningResourceType") {
    return translateFnc("lrt#" + label, {keySeparator: false, nsSeparator: "#"})
  } else if (component === "about") {
    return translateFnc("subject#" + label, {keySeparator: false, nsSeparator: "#"})
  } else {
    return label
  }
}

/**
 * Get the group for the given license
 * @param {object} license
 */
export function getLicenseGroup(license) {
  if (license && license.id) {
    return getLicenseGroupById(license.id)
  }
  return ""
}

/**
 * Get the group for the given license
 * @param {string} licenseId
 */
export function getLicenseGroupById(licenseId) {
  if (licenseId) {
    if (
      licenseId
        .toLowerCase()
        .startsWith("https://creativecommons.org/publicdomain/mark")
    ) {
      return "PDM"
    }
    const regex =
      /^https?:\/\/[a-zA-z0-9.-]+\/(?:licenses|licences|publicdomain)(?:\/publicdomain)?\/([a-zA-Z-]+)/g
    let match = regex.exec(licenseId)
    if (match) {
      return match[1]
    }
  }
  return ""
}

/**
 *
 * @param {*} callBackFunction a call back function where we can implement our logic
 */
export async function getRequestWithLanguage(callBackFunction) {
  let language = i18next.language
  if (
    i18next.language === null ||
    i18next.language === "" ||
    i18next.language === undefined
  ) {
    language = i18next.languages[0]
  }
  const response = await callBackFunction(language)
  if (!response) {
    for (let fallbackLanguage of i18next.languages.filter(
      (item) => item !== i18next.language
    )) {
      const statusOK = await callBackFunction(fallbackLanguage)
      if (statusOK) break
    }
  }
}

/**
 * function that check if a string is valid Url or not
 * @param {string} str an Url as string to check if is valid or not
 * @returns {boolean} value, true if is valid
 */
export function isValidURL(str) {
  var pattern = new RegExp("(www.|http://|https://|ftp://)")
  return pattern.test(str)
}

/**
 * function that build a url with a path
 * @param {string} str an path to attach in Url
 * @returns {string} return complete url
 */
export function buildUrl(str) {
  var urlBuild =
    window.location.protocol + "//" + window.location.host + process.env.PUBLIC_URL
  if (str) {
    urlBuild = urlBuild + "/" + str
  }
  return new URL(urlBuild)
}

/**
 * Function that determines the privacy-policy-link from the given links matches the given language-code (or fallback-lng)
 * @param {Array} privacyPolicyLinks All link from Configuration
 * @param {String} lang  Language Code from Translate
 */
export function getPrivacyPolicyLinkForLanguage(
  privacyPolicyLinks,
  lang,
  fallBackLang
) {
  let policyEntry = undefined
  if (privacyPolicyLinks || privacyPolicyLinks instanceof Array) {
    policyEntry = Array.from(privacyPolicyLinks).filter(
      (item) => item["language"] === lang && item["path"]
    )[0]
    if (policyEntry === undefined) {
      policyEntry = Array.from(privacyPolicyLinks).filter(
        (item) => fallBackLang.includes(item["language"]) && item["path"]
      )[0]
    }
  }

  if (policyEntry !== undefined)
    return !isValidURL(policyEntry["path"])
      ? buildUrl(policyEntry["path"])
      : policyEntry["path"]

  return undefined
}

/**
 * Access a field of the given array and join the values. The values can also be translated.
 * @param {array} array to process
 * @param {fieldAccessor} method that receives an item of the array and should return the field value
 * @param {fieldTranslation} optional, translation-function that translates the field-value
 */
export function joinArrayField(array, fieldAccessor, fieldTranslation) {
  if (array) {
    const filteredArray = array.filter((item) => fieldAccessor(item))
    const fields = filteredArray.map((item) =>
      fieldTranslation ? fieldTranslation(fieldAccessor(item)) : fieldAccessor(item)
    )
    return fields.join(", ")
  }
  return ""
}

export function formatDate(date, format) {
  if (date !== null) {
    moment.locale(i18next.language)
    return moment(date).format(format)
  } else {
    return ""
  }
}
