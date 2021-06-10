import React from 'react'
import { useSelector } from 'react-redux'

import { Typography } from 'antd'

const { Title } = Typography

export const Profile = () => {
    const { profile } = useSelector((state) => state.profile)
    console.log({ profile })
    const profileUsername = profile?.username ? profile.username : 'Anonymous'
    const profilePassword = profile?.password ? profile.password : 'nothing..'
    return (
        <div>
            {!!profile ? (
                <>
                    <Title level={2}>Username: {profileUsername}</Title>
                    <Title level={2}>Password: {profilePassword}</Title>
                </>
            ) : (
                <Title level={2} type="danger" align="center">
                    No Data..
                </Title>
            )}
        </div>
    )
}
