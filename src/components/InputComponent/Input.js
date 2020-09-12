import React from "react";
import styled from "styled-components";

const InputDefault = styled.input`
    padding : 21px 20px;
    border: 1px solid #FFFFFF;
    font-family: "Inter-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    border-radius : 1px;
    color : #FFFFFF;
    background : #0A0A0C;
    margin-bottom : 16px;
    width : 100%;
    text-transform : uppercase;
    border-radius : 1px;
    &::placeholder{
        color: #888888;        
    }
`

const Input = props => {
    return (
         <InputDefault
            placeholder={props.placeholder}
            onChange={props.change}   
            value={props.value}
        />
    )
}

export default Input;