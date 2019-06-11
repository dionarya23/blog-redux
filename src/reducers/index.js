import { combineReducers } from 'redux'
import postReducer from './postReducer'

/**
 * dalam file ini bisa memuat lebih dari 1 reducer, misal di 
 * aplikasi yang kita buat
 * ada fitur comment maka akan ada commentReducer 
 * yang nanti nya akan di combine oleh REDUX
 * */
export default combineReducers({
    posts: postReducer
})