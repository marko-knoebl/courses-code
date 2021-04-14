import { useEffect } from "react";

function DocumentTitle(props: { value: string }) {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);
  return null;
}

export default DocumentTitle;
