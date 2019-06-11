/**
 * Semua Berasal dari file ini store untuk memahami state manangement
 * yang paling dari semua ini adalah kita memiliki rootreducers
 * dimana file tersebut aka memiliki dari berbagai macam reducers
 * seperti post, comment, like
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers' //semua reducers berawal dari file


/**
 * initialState
 * berisi state apa saja yang nanti nya akan dipakai oleh komponen tertentu
 * misal di POSTS component nanti akan memiliki state Items yang berisi
 * kumpulan POSTS
 */
const initialState = {};


/**
 * nah untuk thunk middleware,
 * middleware ini mengizinkan atau memperbolehkan kita untuk
 * menulis action (aksi) yang nanti nya akan membalikan function didalam action
 */
const middleware = [thunk]


const store = createStore(
    rootReducer, 
    initialState,
    compose(
    applyMiddleware(...middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) 

export default store