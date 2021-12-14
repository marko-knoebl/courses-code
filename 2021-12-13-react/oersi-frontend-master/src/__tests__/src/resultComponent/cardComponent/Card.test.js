import React from "react"
import ReactDOM from "react-dom"
import TileCard from "../../../../components/resultComponent/card/Card"
import i18n from "i18next"
import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import {ConfigurationRunTime} from "../../../../helpers/use-context"

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  // have a common namespace used around the full app
  ns: ["translation"],
  defaultNS: "translation",
  resources: {
    en: {
      lrt: {
        "https://w3id.org/kim/hcrt/video": "Video",
      },
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

const defaultConfig = {
  GENERAL_CONFIGURATION: {
    FEATURES: {},
  },
}
const fakeData = {
  about: [
    {
      id: "Test",
    },
  ],
  audience: [
    {
      id: "http://purl.org/dcx/lrmi-vocabs/educationalAudienceRole/teacher",
    },
  ],
  creator: [
    {
      id: null,
      name: "Max Mustermann",
      type: "Person",
    },
  ],
  dateCreated: "2020-02-22",
  datePublished: "2020-02-22",
  description: "an example description",
  id: "https://axel-klinger.gitlab.io/gitlab-for-documents/index.html",
  image:
    "https://www.oernds.de/edu-sharing/preview?nodeId=84400a83-9d1a-4738-a19f-00fc332df247&storeProtocol=workspace&storeId=SpacesStore&dontcache=1589890988103",
  inLanguage: ["en"],
  learningResourceType: [
    {
      id: "https://w3id.org/kim/hcrt/video",
    },
  ],
  license: {
    id: "https://creativecommons.org/licenses/by/4.0/deed.de",
  },
  mainEntityOfPage: [
    {
      dateModified: "2020-07-09T06:13:48.000Z",
      provider: {
        type: null,
        name: "ZOERR",
        dateModified: null,
      },
      id: "https://uni-tuebingen.oerbw.de/edu-sharing/components/render/bd3a8bff-7973-4990-aed8-33a7cb9390f8",
    },
    {
      provider: {
        type: null,
        name: "OERNDS",
        dateModified: null,
      },
      id: "https://oernds.de/edu-sharing/components/render/bd3a8bff-7973-4990-aed8-33a7cb9390f8",
    },
    {},
  ],
  name: "GitLab für Texte",
  _id: 123456,
  sourceOrganization: [
    {
      name: "Hochschule Reutlingen",
      id: null,
      type: "Organization",
    },
  ],
  keywords: ["OER", "Open Education Portal"],
}

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})
describe("TileCard: Test UI", () => {
  it("TileCard: should render without crashing", async () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
  })

  it("TileCard: expanded card should render without crashing", async () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
  })

  it("TileCard: existing provider/source action", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = container.querySelectorAll(".card-actions .MuiButton-label")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).toContain("ZOERR")
    expect(labels).toContain("OERNDS")
  })

  it("TileCard: translate label of learningResourceType", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = container.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).toContain("Video")
  })

  it("TileCard: null fields and empty lists should render", () => {
    const fakeMinimalData = {
      about: [],
      creator: [],
      id: "https://axel-klinger.gitlab.io/gitlab-for-documents/index.html",
      mainEntityOfPage: [],
      name: "GitLab für Texte",
      _id: 123456,
      sourceOrganization: [],
      keywords: [],
    }
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeMinimalData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    ReactDOM.unmountComponentAtNode(container)
  })

  it("TileCard: minimal example should render", () => {
    const fakeMinimalData = {
      id: "https://axel-klinger.gitlab.io/gitlab-for-documents/index.html",
      name: "GitLab für Texte",
      _id: 123456,
    }
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard {...fakeMinimalData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    ReactDOM.unmountComponentAtNode(container)
  })

  const testLicense = (license, expectedIconCount) => {
    let fakeDataLicense = Object.assign({}, fakeData)
    fakeDataLicense.license = {
      id: license,
    }
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard {...fakeDataLicense} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(
      container.querySelectorAll(".card-action-license svg")
    )
    expect(labelNodes).toHaveLength(expectedIconCount)
  }

  it("TileCard: test CC-BY license", () => {
    testLicense("https://creativecommons.org/licenses/by/4.0/deed.de", 2)
  })
  it("TileCard: test CC-BY-NC license", () => {
    testLicense("https://creativecommons.org/licenses/by-nc/4.0", 3)
  })
  it("TileCard: test CC-BY-NC-ND license", () => {
    testLicense("https://creativecommons.org/licenses/by-nc-nd/4.0", 4)
  })
  it("TileCard: test CC-BY-NC-SA license", () => {
    testLicense("https://creativecommons.org/licenses/by-nc-sa/4.0", 4)
  })
  it("TileCard: test CC-BY-ND license", () => {
    testLicense("https://creativecommons.org/licenses/by-nd/4.0", 3)
  })
  it("TileCard: test CC-BY-SA license", () => {
    testLicense("https://creativecommons.org/licenses/by-sa/4.0/", 3)
  })
  it("TileCard: test CC-ZERO license", () => {
    testLicense("https://creativecommons.org/publicdomain/zero/1.0/", 2)
  })
  it("TileCard: test PDM license", () => {
    testLicense("https://creativecommons.org/publicdomain/mark/1.0/", 1)
  })
  it("TileCard: unknown license structure", () => {
    testLicense("https://some.org/lic/unknown", 1)
  })
  it("TileCard: no icon if no provided license", () => {
    testLicense("", 0)
  })

  it("TileCard: organization must not be 'Hochschule Reutlingen' ", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = container.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) =>
      e.textContent.split(":")
    )
    expect(labels[3]).toContain("Hochschule Reutlingen")
  })

  it("TileCard: organization must be empty ", () => {
    let fakeEmptyOrganization = Object.assign({}, fakeData)
    fakeEmptyOrganization.sourceOrganization = []
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeEmptyOrganization} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = container.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).not.toContain(["LABEL.ORGANIZATION"])
  })

  it("TileCard: hide author, if empty", () => {
    let fakeEmptyCreator = Object.assign({}, fakeData)
    fakeEmptyCreator.creator = []
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeEmptyCreator} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = container.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).not.toContain(["LABEL.AUTHOR"])
  })

  it("TileCard: translate Language in English expect 'English' ", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      div
    )
    const labelNodes = div.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).toContain("English")
    ReactDOM.unmountComponentAtNode(div)
  })

  it("TileCard: translate Language code for 'null' label", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} inLanguage={null} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      div
    )
    const labelNodes = div.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)[1]
    expect(labels).toContain("")
    ReactDOM.unmountComponentAtNode(div)
  })

  it("TileCard: translate Language in German expect 'Englisch' ", () => {
    i18next.changeLanguage("de")
    const div = document.createElement("div")
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      div
    )
    const labelNodes = div.querySelectorAll(".card-info")
    const labels = Array.from(labelNodes.values()).map((e) => e.textContent)
    expect(labels).toContain("Englisch")
    ReactDOM.unmountComponentAtNode(div)
  })

  it("TileCard: should have a link for JSON ", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      div
    )
    const labelNodes = div.querySelectorAll(".card-actions a")
    const labels = Array.from(labelNodes).map((e) => e.href)
    expect(labels).toContain("http://localhost/" + fakeData._id + "?format=json")
    ReactDOM.unmountComponentAtNode(div)
  })

  it("TileCard: keywords must not be empty, must have OER ", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(
      container.querySelectorAll(".card-info .MuiChip-label")
    ).map((e) => e.textContent)
    expect(labelNodes).toContain(fakeData.keywords[0])
  })

  it("TileCard: no last date modified", () => {
    let fakeModified = Object.assign({}, fakeData)
    fakeModified.mainEntityOfPage = [
      {
        id: "https://uni-tuebingen.oerbw.de/edu-sharing/components/render/bd3a8bff-7973-4990-aed8-33a7cb9390f8",
      },
      {
        id: "https://oernds.de/edu-sharing/components/render/bd3a8bff-7973-4990-aed8-33a7cb9390f8",
      },
    ]
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeModified} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(container.querySelectorAll(".card-info")).map(
      (e) => e.textContent
    )
    expect(labelNodes).not.toContain("09. Jul. 2020")
  })
  it("TileCard: max last date modified", () => {
    let fakeModified = Object.assign({}, fakeData)
    fakeModified.mainEntityOfPage = [
      {
        dateModified: "2020-07-09T00:00:00.000Z",
      },
      {
        dateModified: "2020-08-09T00:00:00.000Z",
      },
    ]
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={defaultConfig.GENERAL_CONFIGURATION}>
        <TileCard expanded={true} {...fakeModified} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(container.querySelectorAll(".card-info")).map(
      (e) => e.textContent
    )
    expect(labelNodes).toContain("9. Aug. 2020")
  })

  const getFeatureConfig = (features) => {
    let configModified = Object.assign({}, defaultConfig.GENERAL_CONFIGURATION)
    configModified.FEATURES = features
    return configModified
  }
  it("TileCard: no embed-button, if feature is deactivated", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={getFeatureConfig({EMBED_OER: false})}>
        <TileCard {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(container.querySelectorAll(".card-action-embed"))
    expect(labelNodes).toHaveLength(0)
  })
  it("TileCard: show embed-button, if feature is activated", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={getFeatureConfig({EMBED_OER: true})}>
        <TileCard {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(container.querySelectorAll(".card-action-embed"))
    expect(labelNodes).toHaveLength(1)
  })
  it("TileCard: no embed-button, if oer is not embedable", () => {
    let fakeModified = Object.assign({}, fakeData)
    fakeModified.creator = []
    ReactDOM.render(
      <ConfigurationRunTime.Provider value={getFeatureConfig({EMBED_OER: true})}>
        <TileCard {...fakeModified} />
      </ConfigurationRunTime.Provider>,
      container
    )
    const labelNodes = Array.from(container.querySelectorAll(".card-action-embed"))
    expect(labelNodes).toHaveLength(0)
  })
  it("TileCard: show details-button, if feature is activated", () => {
    ReactDOM.render(
      <ConfigurationRunTime.Provider
        value={getFeatureConfig({USE_RESOURCE_PAGE: true})}
      >
        <TileCard {...fakeData} />
      </ConfigurationRunTime.Provider>,
      container
    )
    expect(
      Array.from(container.querySelectorAll(".card-action-embed"))
    ).toHaveLength(0)
    const labelNodes = Array.from(container.querySelectorAll(".button-details"))
    expect(labelNodes).toHaveLength(1)
  })
})
