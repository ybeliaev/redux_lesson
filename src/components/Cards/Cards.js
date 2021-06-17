import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row, Space } from 'antd'
import { postsActions } from '../../store/posts/action'
import { Loader } from '../Loader'

export const Cards = () => {
    const dispatch = useDispatch()
    const { posts, loading } = useSelector((store) => store.posts)

    useEffect(() => {
        dispatch(postsActions.fetchPosts())
    }, [dispatch])
    return (
        <div className="site-card-wrapper">
            <Loader loading={loading}>
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
            </Loader>
        </div>
    )
}
