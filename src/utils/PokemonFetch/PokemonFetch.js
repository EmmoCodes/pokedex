export const listFetch = (api, setState) => {
  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => setState(response.results))
    .catch(error => {
      console.log(error.message)
      return ''
    })
}
