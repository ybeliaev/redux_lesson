import React from 'react'
import { useSelector } from 'react-redux'

import { Row, Col } from 'antd'
import { Typography } from 'antd'

const { Title } = Typography

export const Profile = () => {
    const { profile } = useSelector((state) => state.profile)
    return (
        <Row justify="center">
            <Col span={24}>
                {!!profile ? (
                    <Title>{profile.name}</Title>
                ) : (
                    <Title mark>No Data..</Title>
                )}
            </Col>
        </Row>
    )
}
