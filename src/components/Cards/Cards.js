import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row } from 'antd'
import { postsActions } from '../../store/posts/action'

export const Cards = () => {
    const dispatch = useDispatch()
    const { posts, loading } = useSelector((store) => store.posts)

    useEffect(() => {
        dispatch(postsActions.fetchPosts())
    }, [dispatch])
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {posts.map((item) => {
                    let elem = (
                        <Col span={8}>
                            <Card title={item.title} bordered={false}>
                                {item.body}
                            </Card>
                        </Col>
                    )
                    return elem
                })}
            </Row>
        </div>
    )
}
