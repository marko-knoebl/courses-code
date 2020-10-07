import { useEffect } from "react";

type DocumentTitleProps = {
  value: string;
};

function DocumentTitle(props: DocumentTitleProps) {

  useEffect(
    () => {
      document.title = props.value
    },
    [props.value]
  )
  return null;
}

export default DocumentTitle;
