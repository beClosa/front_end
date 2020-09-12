import React from "react";
import styled from "styled-components";


const LabelDefault = styled.label`
    font-family: "Inter-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
`

const Label = props => {
    return (
         <LabelDefault>
                {props.text}
        </LabelDefault>
    )
}

export default Label;