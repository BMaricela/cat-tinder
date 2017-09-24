const initialState = {
  newCatSuccess: false,
  cat:{
    age: '',
    name: '',
    enjoys: ''
  },
  errors: []
}

export default (currentState=initialState, action) =>{
  let newState
  switch(action.type){
    case("CAT_FORM_UPDATED"):{
      const newCat = Object.assign({}, currentState.cat, {[action.payload.attribute]: action.payload.value})
      newState = Object.assign({}, currentState, {cat: newCat})
      break
    }
    case("CAT_ADDED"):{
      newState = Object.assign({}, currentState, {newCatSuccess: true})
      break
    }

    case("ERROR_ADDING_CAT"):{
      newState = Object.assign({}, currentState, {
        errors: action.payload.validations
      })
      break
    }

    default:
      newState = currentState
  }
  return newState
}
