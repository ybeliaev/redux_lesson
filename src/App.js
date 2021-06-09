import React from 'react'
import { connect } from 'react-redux'

function App({ posts }) {
    console.log({ posts })
    return <div className="container"></div>
}

export default connect(({ posts }) => ({ posts }))(App)
