import React, { useEffect } from 'react';

const DocumentTitleHooks = props => {
  useEffect(
    () => {
      document.title = props.children;
    },
    // die obige Funktion wird nur aufgerufen, wenn sich
    // einer der Einträge hier geändert hat:
    [props.children]
  );

  return null;
};

export default DocumentTitleHooks;
