import { combineReducers } from 'redux'
import noteReducer from './note-reducer'
import promiseReducer from './promise-reducer'

export default combineReducers({
    noteReducer,
    promiseReducer
})