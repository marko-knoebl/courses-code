# Information

### Elasticsearch:

Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents

### React JS:

The Web App is made with React JS and using Reactive Search to connect to Elasticsearch. It provides the user interface to make search queries or add items to Elasticsearch.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run test:coverage`

With this command you can run the test coverage.
and also it generate a folder when you can see the result of coverage, for entire project1

```
 path: <ROOT_FOLDER>/coverage/lcov-report/index.html
```

### `npm run test:coverage-show`

After you run test coverage, this command show the result , 



### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `build:prod` or  `build:dev`
Builds the app for production in a sub folder, default is <br>
* `/oersi` for production
*  `/ ` for develoment <br><br>
if you want to change the name of sub folder you can change the  `PUBLIC_URL=/oersi` in :
 
 * [.env.development](https://gitlab.com/oersi/oersi-frontend/-/blob/master/.env.development) for development mode
 * [.env.production](https://gitlab.com/oersi/oersi-frontend/-/blob/master/.env.production) for production mode

### `npm run build:show`

if you want to see how it look the build project, you can run this command 

### `npm run lint`

check before commit for identifying   patterns,bugs or code smell, found in JavaScript code,

### `npm run lint:fix`

If code has error or warning you can run `lint:fix` to fix those error,

### `npm run format`

Before commit format the code,so all code can have the same formating




# Configuration

In **path** :

```
<ROOT_FOLDER>/public/config/config.json
```

it's a file for configuration in run time Connection with elasticSearch

after you add the url and credencial for elastic search you just refresh the page and it's ok
<br/>

 if you are running through the [OER Search Index Setup](https://gitlab.com/oersi/oersi-setup) , you will find the file __config.json__ in module [ oer-search-index-frontend/](https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/roles/oer-search-index-frontend/templates/config.json) , You can modify from there and run setup again .


<br>
<br>

# Style Override 

it is possible to change CSS after the build (in run-time).  Mostly all CSS class can be overridden.
<br>
To override the existing style, you can do it through the `style-override.css` file. 
<br><br>
The system will check for the file __style-override.css__   (If not exist you can add it).

In **path** :

>  ```/public/css/style-override.css```

<br>

* if you are running through the [OER Search Index Setup](https://gitlab.com/oersi/oersi-setup) , you will find the file __style-override.css__ in module [ oer-search-index-frontend/](https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/roles/oer-search-index-frontend/templates/style-override.css) , You can modify from there and run setup again .

# footer Override 


The footer is the most visible and out-of-the-way place for the technical and legal information of a website that is necessary for the owner to share, because of the value the footer has, we decide to leave it outside the website so everyone can personalize, and add it's own information on it.

<br>
1. Where I can find it?

  We have implemented a template for the footer, which can later be modified and personalized so that it is available to anyone who wants their own information.
  You can find them in:
* [public/footer/en/footer.html](public/footer/en/footer.html), for English language
* [public/footer/de/footer.html](public/footer/de/footer.html), for German language
<br>
2. To support more languages for the footer you can follow this workflow

**example:**<br>
 `public/footer/{lang}/footer.html` -where {lang} is Language code example:` en|it|de|sq` etc.


<br>

Our template uses some __CSS__ styles and you can override them or add your own style, you can use the __style-override.css__  and you can find it in [public/css/style-override.css](public/css/style-override.css).
<br><br>

### add new footer through the setup
You can configure your footer through the ansible-variable `oerindex_frontend_custom_footers` see [https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/group_vars/all.yml](https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/group_vars/all.yml).

  - create a file  and call it `footer.html` 
  - set file with `path` and `language` in `oerindex_frontend_custom_footers` in your inventory-file (or directly in file `ansible/group_vars/all.yml` if you test locally with Vagrant)
  - run setup again


<br>


# Language

The preferred language of your browser will be used for display.
 Some static texts like in Header can be translated in your Language.<br> You can change the translations via json files, which you can find in` public/locales/<LANGUAGECODE>`. The following files are available:
* `translation.json` - contains common translations

###  to add a new language you need to :
  - create another folder in `locales` with your language Code. example: for Deutsch __de__ 
  - Copy json file called `translation.json` under the `locales/en` and paste it, in folder you have created
  - Translate it.
  
### add new language through the setup
You can configure your translations through the ansible-variable `oerindex_frontend_custom_translations` see [https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/group_vars/all.yml](https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/group_vars/all.yml).

 - translate your translation-files
 - set each translation-file with `path` and `language` in `oerindex_frontend_custom_translations` in your inventory-file (or directly in file `ansible/group_vars/all.yml` if you test locally with Vagrant)
 - run setup again
    



<br><br>
# Cookie notice 

A cookie notice is a cookie warning that pops up on websites when a user visits the site for the first time. Cookies must be accompanied by a  link to the cookies policy in the pop-up box message. This allows users to learn more about cookies and ways to control them in the cookies settings.

<!-- How to configure policy: -->

1. How to configure policy

    - local files
        - Create a folder in `public` folder, example: `policy/`
        - Create another folder with the language code example: for English `en` 
        - copy and paste __Privacy__ html  file under the `policy/en/`
        - go to `config/config.js` and add configuration like below .<br>
          __example:__
          ```javascript
            GENERAL_CONFIGURATION:{
            PRIVACY_POLICY_LINK: [
              {'path': 'policy/en/privacy.html', 'language': 'en'}
            ] 
          }  
          
          ```

    - Attaching links
      - To Attaching the link, need only configuration <br>
      __example:__ 
      ```javascript
        GENERAL_CONFIGURATION:{
        PRIVACY_POLICY_LINK: [
          {'path': '{https://example.com/privacy}', 'language': 'en'}
        ] 
      }  
      
      ```

    - add new cookie policy through the setup <br>
      You can configure your cookies policy through the ansible-variable `oerindex_frontend_custom_cookie_links` see [oersi-setup](https://gitlab.com/oersi/oersi-setup/-/blob/master/ansible/group_vars/all.yml). <br>`oerindex_frontend_custom_cookie_links` accept an array with objects, **example:** `{'path': '{link}', 'language': '{languageCode}'}`.

      - set each link with `path` and `language` in `oerindex_frontend_custom_cookie_links` in your inventory-file (or directly in file `ansible/group_vars/all.yml` if you test locally with Vagrant)
      - run setup again

# Embed Resources
If enabled, the user can copy an embed-html-snippet into the clipboard for every resource that contains all necessary metadata (for example, BY licenses must include the author).
* Can be activated in `config.js` via the feature flag `EMBED_OER`.
