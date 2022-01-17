export const getResource = (id) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.PUBLIC_URL}/api-internal/search/oer_data_internal/_doc/${id}/_source`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    )
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
          const json = response.json()
          if (json.then) {
            json.then(resolve).catch(reject)
          } else {
            return resolve(json)
          }
        }
      })
      .catch(reject)
  })
}
