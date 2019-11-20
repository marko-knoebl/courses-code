import React, { useEffect } from "react";

const DocumentTitle: React.FC<{ children: string }> = ({ children }) => {
  useEffect(() => {
    document.title = children;
  }, [children]);
  return null;
};

export default DocumentTitle;
