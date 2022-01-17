import React from "react"
import MultiListComponent from "../multiListComponent/MultiListComponent"

const FiltersComponent = (props) => {
  return (
    <div className={props.className}>
      {props.multilist.map((list, index) => (
        <MultiListComponent key={props.identifier + list.component} {...list} />
      ))}
    </div>
  )
}

export default FiltersComponent
