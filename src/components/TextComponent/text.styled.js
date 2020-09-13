import styled from "styled-components";

const Text = styled.p`
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-transform : none !important;
    margin-top : 0 !important; 
    color : ${props => props.warning ? "#FF9500" : "white"}
`

export default Text;