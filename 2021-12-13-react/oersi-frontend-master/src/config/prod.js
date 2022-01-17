export default {
  name: "production",
  resultList: {
    component: "results",
    dataField: "name",
    pagination: true,
    showResultStats: true,
    paginationAt: "bottom",
    sortBy: null,
    pagesShow: 5,
    sizeShow: 5,
    URLParams: true,
    showEndPage: true,
    and: [
      "author",
      "license",
      "search",
      "provider",
      "learningResourceType",
      "language",
      "about",
      "sourceOrganization",
    ],
    sortByDynamic: null,
  },
  searchComponent: {
    component: "search",
    dataField: ["name", "creator.name", "description", "keywords"],
    fieldWeights: [1, 3],
    queryFormat: "and",
    fuzziness: 0,
    debounce: 100,
    autosuggest: true,
    highlight: true,
    highlightField: "keywords",
    iconPosition: "right",
    showFilter: true,
    URLParams: true,
    and: [
      "author",
      "license",
      "provider",
      "results",
      "learningResourceType",
      "language",
      "about",
      "sourceOrganization",
    ],
  },
  multiList: [
    {
      component: "about",
      dataField: "about.id",
      title: "about",
      placeholder: "about",
      filterLabel: "about",
      queryFormat: "and",
      showMissing: true,
      showFilter: true,
      showSearch: false,
      size: 100,
      className: "about-card",
      fontAwesome: "",
      URLParams: true,
      and: [
        "author",
        "license",
        "search",
        "provider",
        "results",
        "language",
        "learningResourceType",
        "sourceOrganization",
      ],
    },
    {
      component: "learningResourceType",
      dataField: "learningResourceType.id",
      title: "resourceType",
      placeholder: "resourceType",
      filterLabel: "resourceType",
      queryFormat: "and",
      showMissing: true,
      showFilter: true,
      showSearch: false,
      className: "lrt-card",
      fontAwesome: "",
      URLParams: true,
      and: [
        "author",
        "license",
        "search",
        "provider",
        "results",
        "language",
        "sourceOrganization",
        "about",
      ],
    },
    {
      component: "license",
      dataField: "license.id",
      title: "license",
      placeholder: "license",
      filterLabel: "license",
      queryFormat: "and",
      showMissing: true,
      showFilter: true,
      showSearch: false,
      className: "license-card",
      fontAwesome: "",
      URLParams: true,
      customQuery: (value, props) => {
        return value instanceof Array
          ? {
              query: {
                bool: {
                  should: [
                    ...value.map((v) => ({
                      prefix: {
                        "license.id": v,
                      },
                    })),
                    ...value.map((v) => ({
                      prefix: {
                        "license.id": v.replace("https:/", "http:/"),
                      },
                    })),
                  ],
                },
              },
            }
          : {}
      },
      defaultQuery: getPrefixAggregationQuery("license.id", [
        "https://creativecommons.org/licenses/by/",
        "https://creativecommons.org/licenses/by-sa/",
        "https://creativecommons.org/licenses/by-nd/",
        "https://creativecommons.org/licenses/by-nc-sa/",
        "https://creativecommons.org/licenses/by-nc/",
        "https://creativecommons.org/licenses/by-nc-nd/",
        "https://creativecommons.org/publicdomain/zero/",
        "https://creativecommons.org/publicdomain/mark",
      ]),
      and: [
        "author",
        "search",
        "provider",
        "results",
        "learningResourceType",
        "language",
        "about",
        "sourceOrganization",
      ],
    },
    {
      component: "author",
      dataField: "persons.name.keyword",
      nestedField: "",
      title: "author",
      placeholder: "author",
      filterLabel: "author",
      queryFormat: "and",
      showMissing: true,
      showSearch: true,
      showFilter: true,
      size: 1000,
      className: "author-card",
      fontAwesome: "",
      URLParams: true,
      and: [
        "license",
        "search",
        "provider",
        "results",
        "learningResourceType",
        "language",
        "about",
        "sourceOrganization",
      ],
    },
    {
      component: "sourceOrganization",
      dataField: "institutions.name",
      title: "organization",
      placeholder: "organization",
      filterLabel: "organization",
      queryFormat: "and",
      showMissing: true,
      showFilter: true,
      showSearch: true,
      size: 100,
      className: "source-type-card",
      fontAwesome: "",
      URLParams: true,
      and: [
        "author",
        "license",
        "search",
        "provider",
        "results",
        "language",
        "learningResourceType",
        "about",
      ],
    },
    {
      component: "language",
      dataField: "inLanguage",
      title: "language",
      placeholder: "language",
      filterLabel: "language",
      queryFormat: "and",
      showMissing: true,
      showFilter: true,
      showSearch: false,
      className: "language-card",
      fontAwesome: "",
      URLParams: true,
      and: [
        "author",
        "license",
        "search",
        "provider",
        "results",
        "learningResourceType",
        "about",
        "sourceOrganization",
      ],
    },
    {
      component: "provider",
      dataField: "mainEntityOfPage.provider.name",
      title: "provider",
      placeholder: "provider",
      filterLabel: "provider",
      queryFormat: "and",
      showMissing: true,
      showFilter: true,
      showSearch: false,
      className: "provider-card",
      fontAwesome: "",
      URLParams: true,
      and: [
        "author",
        "license",
        "search",
        "results",
        "learningResourceType",
        "language",
        "about",
        "sourceOrganization",
      ],
    },
  ],
}
function getPrefixAggregationQuery(fieldName, prefixList) {
  var aggsScript = "if (doc['" + fieldName + "'].size()==0) { return null }"
  aggsScript += prefixList.reduce(
    (result, prefix) =>
      result +
      " else if (doc['" +
      fieldName +
      "'].value.startsWith('" +
      prefix +
      "') || doc['" +
      fieldName +
      "'].value.startsWith('" +
      prefix.replace("https:/", "http:/") +
      "')) { return '" +
      prefix +
      "'}",
    ""
  )
  aggsScript += " else { return doc['" + fieldName + "'] }"
  return () => ({
    aggs: {
      "license.id": {
        terms: {
          script: {
            source: aggsScript,
            lang: "painless",
          },
        },
      },
    },
  })
}
