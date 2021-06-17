import { postsActionTypes } from './action'

const initState = {
    posts: [],
    loading: false,
}
export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case postsActionTypes.SET_POSTS:
            return { ...state, posts: action.payload }
        case postsActionTypes.SET_LOADING:
            return { ...state, loading: action.payload }
        case postsActionTypes.CLEAR_POSTS:
            return { ...state, posts: [] }
        default:
            return state
    }
}
