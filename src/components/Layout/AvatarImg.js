import React from 'react'
import styled from 'styled-components'

const AvatarImg = styled.img`
  margin-right: 0.5em;
  ${props => props.small && (`
    clip-path: circle(10px at center);
    width:20px;
  `)};
  ${props => props.medium && (`
    clip-path: circle(15px at center);
    width:30px;
    height:30px;
  `)};
  ${props => props.large && (`
    clip-path: circle(25px at center);
    width:50px;
  `)};
`

AvatarImg.displayName = "AvatarImg"

export default AvatarImg