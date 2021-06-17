import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = (store) => (next) => (action) => {
    const state = store.getState()
    console.log({ store, action })

    return next(action)
}

export const middlewares = composeWithDevTools(applyMiddleware(logger))
