import React from 'react'
import { Spin, Space } from 'antd'

export const Loader = () => {
    return (
        <Space size="middle">
            <Spin size="large" />
        </Space>
    )
}
