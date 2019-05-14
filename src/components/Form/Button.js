// .btn-block {
//     display: block;
//     width: 100%;
// }

import React from "react";
import styled from 'styled-components'

const Btn = styled.button`
    display: ${props => props.block ? "block" : "inline-block"};
    padding: ${props => props.large ? "10px 16px" : "6px 12px"};
    margin-bottom: 0;
    font-size: ${props => props.large ? "18px" : "14px"};
    font-weight: 400;
    line-height: ${props => props.large ? "1.3333333" : "1.42857143"};
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: ${props => props.large ? "6px" : "4px"};

    color: ${props => props.primary ? "#fff" : ""};
    background-color: ${props => props.primary ? "#337ab7" : ""};
    border-color: ${props => props.primary ? "#2e6da4" : ""};

    width: ${props => props.block ? "100%" : ""};
`

Btn.displayName = "Btn"

export default Btn;
