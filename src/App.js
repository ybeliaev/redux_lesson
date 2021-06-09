import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import { LoginForm, Profile } from './components'

function App() {
    return (
        <Provider store={store}>
            <div>
                <Profile />
                <LoginForm />
            </div>
        </Provider>
    )
}

export default App
