window['runTimeConfig'] = {
  ELASTIC_SEARCH: {
    URL: "http://localhost:9200/",
    CREDENTIALS: "",
    APP_NAME: "oer_data"
  },
  GENERAL_CONFIGURATION:{
    PUBLIC_URL: "http://localhost/resources",
    RESULT_PAGE_SIZE_OPTIONS:["12", "24", "48", "96"],  // page size options configuration    
    NR_OF_RESULT_PER_PAGE:12,  //  number of results to show per view. Defaults to 12.
    /**
     * Accept a list of objects 
     * example:
     * {'path': 'public/{folderName}/{languageCode}/{fileName}.html', 'language': '{languageCode}'}
     * 
     */
    PRIVACY_POLICY_LINK: [],
    I18N_CACHE_EXPIRATION: 600000, // expiration time of the i18n translation cache storage
    I18N_DEBUG: false,
    TRACK_TOTAL_HITS: true, // track number of total hits from elasticsearch - see https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-your-data.html#track-total-hits
    FEATURES: {
      EMBED_OER: true, // feature toggle: use "embed-oer" button
      SCROLL_TOP_BUTTON: true, // feature toggle: use "scroll-to-top" button
      USE_RESOURCE_PAGE: true // feature toggle: use a single html-page per resource
    }
  }
}