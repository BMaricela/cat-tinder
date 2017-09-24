export function getCats(apiUrl){
  return (dispatch)=>{
    return fetch(`${apiUrl}/cats`)
      .then((rawResponse) =>{
        return rawResponse.json()
      })
      .then((parsedResponse)=>{
        dispatch({
          type: 'CATS_FETCHED',
          payload: parsedResponse.cats
        })
      })
  }
}

export function addCat(apiUrl, params){
  return (dispatch)=>{
    return fetch(`${apiUrl}/cats`,
      {
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      if(parsedResponse.errors){
        dispatch({
          type: 'ERROR_ADDING_CAT',
          payload: parsedResponse.errors
        })
      }else{
        dispatch({
          type: 'CAT_ADDED',
          payload: parsedResponse.cat
        })
      }
    })
  }
}

export function updateCatForm(attribute, value){
  return {
    type: 'CAT_FORM_UPDATED',
    payload: {
      attribute: attribute,
      value: value
    }
  }
}
