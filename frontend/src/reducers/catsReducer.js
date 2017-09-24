const initialState = {
  all: []
}

export default (currentState=initialState, action) =>{
  let newState
  switch(action.type){
    case("CATS_FETCHED"):{
      newState = Object.assign({}, currentState, {all: action.payload})
      break
    }
    case("CAT_ADDED"):{
      let cats = currentState.all.slice()
      cats.push(action.payload)
      newState = Object.assign({}, currentState, {all: cats})
      break
    }
    default:
      newState = currentState
  }
  return newState
}
