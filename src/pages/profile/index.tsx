import { useSession } from 'next-auth/react'
import React from 'react'

const ProfilePage = () => {
  const { data }: any = useSession()
  return (
    <div>{data && data.user.fullname}</div>
  )
}

export default ProfilePage