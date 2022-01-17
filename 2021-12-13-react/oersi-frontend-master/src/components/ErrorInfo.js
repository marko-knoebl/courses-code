import React from "react"
import {Box, Paper, Typography} from "@material-ui/core"

const ErrorInfo = (props) => {
  const {statusCode, statusText} = props
  return (
    <Paper
      className="error-message"
      style={{textAlign: "center"}}
      data-testid="error-message"
    >
      <Box p={5}>
        <Typography variant="h1">{statusCode}</Typography>
      </Box>
      <Box p={3}>
        <Typography variant="h3">
          {statusText ? statusText : getDefaultMessage()}
        </Typography>
      </Box>
    </Paper>
  )

  function getDefaultMessage() {
    if (statusCode === 404) {
      return "The page you are looking for was not found."
    }
    return "Internal Server Error"
  }
}

export default ErrorInfo
