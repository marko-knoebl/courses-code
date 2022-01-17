import React from "react"
import "./EmbedDialog.css"
import {withTranslation} from "react-i18next"
import parse from "html-react-parser"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import {getHtmlEmbedding} from "../../helpers/embed-helper"

const EmbedDialog = (props) => {
  const {onClose, open, data} = props
  const htmlEmbedding = getHtmlEmbedding(data, props.t)
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)
  const handleTabChange = (event, newValue) => {
    setActiveTabIndex(newValue)
  }
  const [copiedToClipboard, setCopiedToClipboard] = React.useState(false)
  function copyCodeToClipboard() {
    navigator.clipboard.writeText(htmlEmbedding)
    setCopiedToClipboard(true)
  }
  function isCopySupported() {
    return navigator.clipboard
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth={true}
      aria-labelledby="embed-dialog-title"
      TransitionProps={{unmountOnExit: true, mountOnEnter: true}}
    >
      <DialogTitle id="embed-dialog-title" disableTypography={true}>
        <Typography variant="h5">
          {props.t("EMBED_MATERIAL.DIALOG_TITLE")}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Paper className="pl-3 pr-3" variant="outlined">
          <Tabs
            value={activeTabIndex}
            onChange={handleTabChange}
            aria-label="tabs example"
          >
            <Tab
              className="embed-dialog-tab-preview"
              label={props.t("EMBED_MATERIAL.PREVIEW")}
            />
            <Tab
              className="embed-dialog-tab-code"
              label={props.t("EMBED_MATERIAL.CODE")}
            />
          </Tabs>
          <Divider />
          <div className="mt-2 mb-2 embed-dialog-content">
            <TabPanel
              className="embed-dialog-tabpanel"
              index={0}
              activeTabIndex={activeTabIndex}
            >
              {parse(htmlEmbedding)}
            </TabPanel>
            <TabPanel
              className="embed-dialog-tabpanel embed-dialog-tabpanel-code"
              index={1}
              activeTabIndex={activeTabIndex}
            >
              <textarea
                className="embed-dialog-textarea"
                readOnly={true}
                rows={5}
                value={htmlEmbedding}
              />
            </TabPanel>
          </div>
          {isCopySupported() && (
            <>
              <Divider />
              <div className="embed-dialog-content-buttons">
                <Button
                  color={"primary"}
                  className={
                    "m-2 embed-dialog-copy-button" +
                    (copiedToClipboard ? " embed-dialog-copy-done-button" : "")
                  }
                  onClick={copyCodeToClipboard}
                  variant="outlined"
                  disableElevation={true}
                >
                  {copiedToClipboard
                    ? props.t("LABEL.COPY_DONE")
                    : props.t("LABEL.COPY")}
                </Button>
              </div>
            </>
          )}
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {props.t("LABEL.CLOSE")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
const TabPanel = (props) => {
  const {children, index, activeTabIndex} = props
  return (
    <div
      className={props.className}
      role="tabpanel"
      hidden={activeTabIndex !== index}
      id={`embed-dialog-tabpanel-${index}`}
      aria-labelledby={`embed-dialog-tabpanel-${index}`}
    >
      {children}
    </div>
  )
}

export default withTranslation()(EmbedDialog)
