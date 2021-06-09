// import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import rootReducers from './modules'

const configureStore = (reducers = {}, preLoaderState = {}, middlewares = []) =>
    createStore(
        combineReducers(...rootReducers, ...reducers),
        preLoaderState,
        compose(
            applyMiddleware(...middlewares, thunk, reduxLogger),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
export default configureStore
