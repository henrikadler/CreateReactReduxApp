const addToCart = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}
/*
let defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const makeAjaxCall = (endpoint, httpMethod = 'GET', bodyData = null, headers = defaultHeaders) => {
  return (dispatch, getState) => {
    dispatch({type: 'REQUEST_STARTED'})
    fetch(endpoint, {
      method: httpMethod,
      mode: 'cors',
      body: bodyData,
      headers: headers
    })
    .then(response => {
      dispatch({type: 'REQUEST_SUCCEEDED', payload: response})
    })
    .catch(error => {
      dispatch({type: 'REQUEST_FAILED', error: error})
    })
  }
}
*/
export {
  addToCart /*,
  makeAjaxCall */
}
