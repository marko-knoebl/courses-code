import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export function ScrollTop() {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = () => {
    const anchor = document.querySelector("#top-anchor")
    anchor.scrollIntoView({behavior: "smooth", block: "center"})
  }

  return (
    <>
      <div id="top-anchor" />
      <Zoom in={trigger}>
        <Fab
          onClick={handleClick}
          size="small"
          aria-label="scroll back to top"
          className={classes.root}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  )
}
