import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import { Profile } from './components'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Profile />
            </div>
        </Provider>
    )
}

export default App
