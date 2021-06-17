import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

import { LoginForm, Profile, Cards } from './components'

import { Row, Col, Divider } from 'antd'
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Row gutter={16}>
                <Col span={12}>
                    <Profile />
                </Col>
                <Col span={12}>
                    <LoginForm />
                </Col>
            </Row>
            <Divider orientation="left">Cards</Divider>
            <Cards />
        </Provider>
    )
}

export default App
