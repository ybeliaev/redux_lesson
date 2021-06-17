import React from 'react'
import { Spin, Space } from 'antd'

export const Loader = ({ children, loading }) => {
    return (
        <Spin tip="Loading..." size="large" spinning={loading}>
            {children}
        </Spin>
    )
}
