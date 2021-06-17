import React, { useEffect } from 'react'
import { Card, Col, Row } from 'antd'

export const Cards = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/10')
            .then((response) => response.json())
            .then((data) => console.log(data))
    }, [])
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {[1, 2, 3].map((item) => {
                    let elem = (
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    )
                    return elem
                })}
            </Row>
        </div>
    )
}
