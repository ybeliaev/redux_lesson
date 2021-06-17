import { combineReducers } from 'redux'

import { profileReducer as profile } from './profile'
import { postsReducer as posts } from './posts'

export const reducers = combineReducers({
    profile,
    posts,
})
