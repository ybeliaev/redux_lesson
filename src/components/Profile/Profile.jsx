import React from 'react'
import { useSelector } from 'react-redux'

import { Typography } from 'antd'

const { Title } = Typography

export const Profile = () => {
    const { profile } = useSelector((state) => state.profile)
    return (
        <div>
            {!!profile ? (
                <Title level={2} align="center">
                    {profile.name}
                </Title>
            ) : (
                <Title level={2} type="danger" align="center">
                    No Data..
                </Title>
            )}
        </div>
    )
}
