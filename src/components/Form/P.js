import React from "react";
import styled from 'styled-components'

// const P = ({ children }) => <p>{children}</p>;

const P = styled.p`
  padding-top: ${props => props.quote ? "10px" : "" };
  padding-left: ${props => props.quote ? "10px" : "" };
  border-left: ${props => props.quote ? "4px solid grey" : "" };
`

P.displayName = "P"

export default P;
