import React from "react"
import "./Card.css"
import {withTranslation} from "react-i18next"
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import InputIcon from "@material-ui/icons/Input"
import StorageIcon from "@material-ui/icons/Storage"
import Chip from "@material-ui/core/Chip"
import Link from "@material-ui/core/Link"
import Tooltip from "@material-ui/core/Tooltip"
import {ConfigurationRunTime} from "../../../helpers/use-context"
import {isEmbeddable} from "../../../helpers/embed-helper"
import {formatDate, getLicenseGroup, joinArrayField} from "../../../helpers/helpers"
import {getLicenseIcon, JsonLinkedDataIcon} from "../../CustomIcons"
import EmbedDialog from "../EmbedDialog"
import LazyLoad from "react-lazyload"

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}))

const TileCard = (props) => {
  const context = React.useContext(ConfigurationRunTime)
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(
    props.expanded ? props.expanded : false
  )
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [embedDialogOpen, setEmbedDialogOpen] = React.useState(false)
  const handleClickEmbedDialogOpen = () => {
    setEmbedDialogOpen(true)
  }
  const handleEmbedDialogClose = (value) => {
    setEmbedDialogOpen(false)
  }

  const licenseGroup = getLicenseGroup(props.license).toLowerCase()
  const ExtendedCardContent = () => {
    return (
      <>
        {getCardInfoTextEntry(joinArrayField(props.creator, (item) => item.name))}
        {getCardInfoTextEntry(
          joinArrayField(props.sourceOrganization, (item) => item.name)
        )}
        {getCardInfoTextEntry(maxModifiedDate(props.mainEntityOfPage))}
        {getCardInfoTextEntry(
          joinArrayField(
            props.inLanguage,
            (item) => item,
            (label) => props.t("language:" + label)
          )
        )}
        {props.keywords && props.keywords[0] && (
          <div className="card-info mt-3">
            {props.keywords.map((item) => (
              <Chip
                key={item + props._id}
                className="m-1"
                size="small"
                label={item}
              />
            ))}
          </div>
        )}
      </>
    )
  }
  const ExtendedCardActions = () => {
    return (
      <>
        {props.mainEntityOfPage
          ? props.mainEntityOfPage
              .filter((e) => e.provider && e.provider.name)
              .map((item) => {
                return (
                  <Button
                    target="_blank"
                    rel="noopener"
                    href={item.id}
                    startIcon={<StorageIcon />}
                    key={item.provider.name + props._id}
                  >
                    {item.provider.name}
                  </Button>
                )
              })
          : ""}
        <Tooltip title={props.t("LABEL.JSON")} arrow>
          <IconButton
            target="_blank"
            href={process.env.PUBLIC_URL + "/" + props._id + "?format=json"}
            aria-label="link to json-ld"
          >
            <JsonLinkedDataIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }
  return (
    <React.Fragment>
      <Card className="card-card-root m-3">
        <Link
          target="_blank"
          rel="noopener"
          href={props.id}
          className="card-header-link"
          aria-label={props.name}
        >
          <LazyLoad offset={100} once>
            <CardMedia
              className="card-card-media"
              image={
                props.image
                  ? props.image
                  : process.env.PUBLIC_URL + "/help_outline.svg"
              }
              title={props.id}
            />
          </LazyLoad>
          <CardHeader
            className="card-header-title"
            title={
              <Typography
                variant="h5"
                component="div"
                className={
                  "card-hide-overflow " +
                  (expanded ? "card-line-clamp-eight" : "card-line-clamp-two")
                }
              >
                {props.name}
              </Typography>
            }
          />
        </Link>
        <CardContent className="card-infos">
          {props.description && (
            <Typography
              variant="body1"
              className={
                "card-description card-hide-overflow " +
                (expanded ? "card-line-clamp-eight" : "card-line-clamp-four")
              }
            >
              {props.description}
            </Typography>
          )}
          {getCardInfoTextEntry(
            joinArrayField(
              props.about,
              (item) => item.id,
              (label) =>
                props.t("subject#" + label, {
                  keySeparator: false,
                  nsSeparator: "#",
                })
            )
          )}
          {getCardInfoTextEntry(
            joinArrayField(
              props.learningResourceType,
              (item) => item.id,
              (label) =>
                props.t("lrt#" + label, {keySeparator: false, nsSeparator: "#"})
            )
          )}
          {!context.FEATURES.USE_RESOURCE_PAGE && (
            <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
              <ExtendedCardContent />
            </Collapse>
          )}
        </CardContent>
        <CardActions className="card-actions mt-auto" disableSpacing>
          <div>
            {props.license && props.license.id && (
              <IconButton
                className="card-action-license"
                target="_blank"
                rel="noreferrer"
                href={props.license.id}
                aria-label={licenseGroup}
              >
                {getLicenseIcon(licenseGroup)}
              </IconButton>
            )}
            {!context.FEATURES.USE_RESOURCE_PAGE && (
              <>
                {context.FEATURES.EMBED_OER &&
                  isEmbeddable({...props, licenseGroup: licenseGroup}) && (
                    <>
                      <Button
                        className="card-action-embed"
                        onClick={handleClickEmbedDialogOpen}
                        startIcon={<InputIcon />}
                        key={"embed" + props._id}
                      >
                        {props.t("EMBED_MATERIAL.EMBED")}
                      </Button>
                      <EmbedDialog
                        open={embedDialogOpen}
                        onClose={handleEmbedDialogClose}
                        data={{...props, licenseGroup: licenseGroup}}
                      />
                    </>
                  )}
                <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
                  <ExtendedCardActions />
                </Collapse>
              </>
            )}
          </div>
          {context.FEATURES.USE_RESOURCE_PAGE ? (
            <Button
              className="button-details"
              href={process.env.PUBLIC_URL + "/" + props._id}
              key={"button-details" + props._id}
            >
              {props.t("LABEL.SHOW_DETAILS")}
            </Button>
          ) : (
            <IconButton
              className={
                "mt-auto " +
                clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })
              }
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </React.Fragment>
  )

  function getCardInfoTextEntry(text) {
    return text ? (
      <Typography
        variant="body1"
        className={
          "card-info mt-3" +
          (expanded ? "" : " card-hide-overflow card-line-clamp-one")
        }
        component="div"
      >
        {text}
      </Typography>
    ) : (
      ""
    )
  }

  function maxModifiedDate(mainEntityOfPageArray) {
    if (mainEntityOfPageArray) {
      const dates = mainEntityOfPageArray
        .filter((item) => item.dateModified)
        .map((item) => item.dateModified)
      let maxDate
      for (let i = 0; i < dates.length; i++) {
        if (!maxDate || dates[i] > maxDate) {
          maxDate = dates[i]
        }
      }
      if (maxDate) {
        return formatDate(maxDate, "ll")
      }
    }
    return ""
  }
}

Card.propTypes = {
  props: PropTypes.object,
}

export default withTranslation(["translation", "language", "lrt", "subject"])(
  TileCard
)
