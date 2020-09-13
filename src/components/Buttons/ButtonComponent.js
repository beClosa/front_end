import React from "react";
const ButtonComponent = props => {
    return (
        <React.Fragment>
            <button className="button__primary" type={props.type}>
                {
                    props.text
                }
                {
                    props.children
                }
            </button>
            {
                props.description !== undefined ? <p className="button__description">
                    {props.description}
                </p> : false 
            }
        </React.Fragment>
    )
}

export default ButtonComponent