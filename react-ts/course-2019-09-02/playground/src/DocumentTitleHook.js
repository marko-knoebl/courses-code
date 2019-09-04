import React, { useEffect } from "react";

const DocumentTitleHook = ({ children }) => {
  useEffect(() => {
    document.title = children;
  }, []);
  return null;
};

export default DocumentTitleHook;
