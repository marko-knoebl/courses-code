export const submitContactRequest = (contactRequest) => {
  return new Promise((resolve, reject) => {
    fetch(process.env.PUBLIC_URL + "/api-internal/contact", {
      method: "POST",
      body: contactRequest,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          reject({
            error: new Error(
              `Error response. (${response.status}) ${response.statusText}`
            ),
            statusCode: response.status,
            statusText: response.statusText,
          })
        } else {
          return resolve()
        }
      })
      .catch(reject)
  })
}
