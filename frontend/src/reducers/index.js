import {combineReducers} from 'redux'
import catsReducer from './catsReducer'
import catFormReducer from './catFormReducer'
import appStateReducer from './appStateReducer'

export default combineReducers({
  appState: appStateReducer,
  cats: catsReducer,
  catForm:  catFormReducer
})
