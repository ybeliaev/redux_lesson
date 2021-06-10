import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

import { LoginForm, Profile } from './components'

import { Row, Col } from 'antd'
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Row>
                <Col span={12}>
                    <Profile />
                </Col>
                <Col span={12}>
                    <LoginForm />
                </Col>
            </Row>
        </Provider>
    )
}

export default App
