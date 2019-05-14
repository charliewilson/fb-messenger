import React from 'react'
import AvatarImg from './AvatarImg'

const Avatar = ({ username, size = "medium" }) => (
  <AvatarImg
    large
    src={`/images/${username}_lg.jpg`}
    alt={`${username}`}
  />
)

export default Avatar
