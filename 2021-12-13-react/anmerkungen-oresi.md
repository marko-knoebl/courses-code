# view-Benennung bzw Hierarchie

- /components
  - Header.js
  - Header.css
  - Search.js
  - Search.css
- /views
  - SearchIndexView.js
  - SearchIndexView/
    - MultiListComponent.js
    - MultiListComponent.css
  - ContactView
  - ResourceDetailsView

# Event-Benennung

immer mit _on_

toggleShowFilterButton -> onToggleShowFilterButton

# eventuell:

## Translations

"unwichtigere Empfehlung":

statt "withTranslation" -> "useTranslation" (hook)

## Configuration.js

eventuell direkt unter src/

## App.js

eventuell `<Router>` und `<ReactiveBase>` in übergeordnete Komponente (_Configuration.js_ oder _index.js_)
