import React from 'react'
import { connect } from 'react-redux'

import { getPosts as getPostsAction } from './redux/modules/posts'

function App({ posts, getPosts }) {
    console.log({ posts })
    return <div className="container"></div>
}

export default connect(({ posts }) => ({ posts }), {
    getPosts: getPostsAction,
})(App)
