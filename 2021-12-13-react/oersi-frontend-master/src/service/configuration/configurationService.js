export const getRequest = (url) => {
  return fetch(`${process.env.PUBLIC_URL}${url}`, {
    credentials: "same-origin",
  })
}
