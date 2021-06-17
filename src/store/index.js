import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from './reducers'
import { middlewares } from './middlewares'

// фабрика для создания состояний
export const store = createStore(reducers, middlewares)
