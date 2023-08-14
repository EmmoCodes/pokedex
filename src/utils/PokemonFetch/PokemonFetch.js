export const fetchEmAll = (api, setState, key) => {
  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => (key ? setState(response[key]) : setState(response)))
    .catch(error => {
      console.log(error.message)
      return ''
    })
}

export const itemFetch = (api, setState) => {
  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong with fetch')
      }
      return response.json()
    })
    .then(response => setState(response))
    .catch(error => {
      console.log(error.message)
      return ''
    })
}
