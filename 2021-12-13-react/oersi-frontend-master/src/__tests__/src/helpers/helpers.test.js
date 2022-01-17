import React from "react"
import i18n from "i18next"
import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import getParams, {
  getLabelForStandardComponent,
  getRequestWithLanguage,
  setParams,
  isValidURL,
  buildUrl,
} from "../../../helpers/helpers"

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: ["fr", "es", "it", "en", "de"],
  resources: {
    en: {
      language: {
        de: "German",
        en: "English",
      },
    },
    de: {
      language: {
        de: "Deutsch",
        en: "Englisch",
      },
    },
  },
})

function translateDummy(key, options) {
  return key + "_translated"
}

describe("helpers", () => {
  it("getParams : URL has an param", () => {
    let param = getParams(new URL("http://localhost:3000/?size=10"), "size")
    expect(param).toEqual("10")
  })
  it("getParams : URL has not an param", () => {
    let param = getParams(new URL("http://localhost:3000/"), "size")
    expect(param).toEqual(null)
  })

  it("setParams : We must add an new param into URL", () => {
    let param = setParams(new URL("http://localhost:3000/"), {
      name: "language",
      value: "de",
    })
    expect(param.get("language")).toEqual("de")
  })

  it("getLabelForStandardComponent : label N/A", () => {
    let label = getLabelForStandardComponent("N/A", "language", translateDummy)
    expect(label).toEqual("LABEL.N/A_translated")
  })
  it("getLabelForStandardComponent : component language", () => {
    let label = getLabelForStandardComponent("de", "language", translateDummy)
    expect(label).toEqual("language:de_translated")
  })
  it("getLabelForStandardComponent : component license", () => {
    let label = getLabelForStandardComponent(
      "https://creativecommons.org/publicdomain/zero/1.0",
      "license",
      translateDummy
    )
    expect(label).toEqual("ZERO")
  })
  it("getLabelForStandardComponent : component with translations", () => {
    let label = getLabelForStandardComponent(
      "TEST",
      "learningResourceType",
      translateDummy
    )
    expect(label).toEqual("lrt#TEST_translated")
    label = getLabelForStandardComponent("TEST", "about", translateDummy)
    expect(label).toEqual("subject#TEST_translated")
  })
  it("getLabelForStandardComponent : component other", () => {
    let label = getLabelForStandardComponent(
      "TESTLABEL",
      "other_xxx",
      translateDummy
    )
    expect(label).toEqual("TESTLABEL")
  })
  it("getRequestWithLanguage : Default language is ' ', repeat until it find language 'en'  ", () => {
    i18next.changeLanguage(null)
    getRequestWithLanguage(callBackForTest)
    i18next.changeLanguage("en") // back to english again
  })

  it("getRequestWithLanguage : Default language is 'en', http status 200  ", () => {
    i18next.changeLanguage("de")
    getRequestWithLanguage(callBackForTest)
    i18next.changeLanguage("en") // back to english again
  })

  it("getRequestWithLanguage : Default Language is 'al',  http status 404, repeat until it find language 'en' ", () => {
    i18next.changeLanguage("al")
    getRequestWithLanguage(callBackForTest)
    i18next.changeLanguage("en") // back to english again
  })

  async function callBackForTest(lang) {
    const result = lang
    if (result === "en") {
      expect(result).toEqual(i18next.language)
      return true
    }
    return false
  }

  it("validURL : Check if a string is valid, Should be valid for 'http://localhost:3000/?size=10&lng=de' ", () => {
    const isValid = isValidURL("http://localhost:3000/?size=10&lng=de")
    expect(isValid).toEqual(true)
  })

  it("validURL : Check if a string is valid, Should not be valid for 'public/privacy/en/policy.html' ", () => {
    const isValid = isValidURL("public/privacy/en/policy.html")
    expect(isValid).toEqual(false)
  })

  it("buildUrl : Should return a url with this path 'privacy/en/policy.html' ", () => {
    const urlBuild = buildUrl("privacy/en/policy.html")
    expect(urlBuild.toString()).toEqual("http://localhost/privacy/en/policy.html")
  })
  it("buildUrl : Should return only url ", () => {
    const urlBuild = buildUrl("")
    expect(urlBuild.toString()).toEqual("http://localhost/")
  })
})
