import { createStore } from 'redux'
import { reducers } from './reducers'

// фабрика для создания состояний
export const store = createStore(reducers)
