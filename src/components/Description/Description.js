import React from "react";
import "../../scss/components/_heading.scss";
const Description = props => {
    return (
        <div className="description">
            <div className="description__wrapper">
                {
                    props.blockArea ? <p className={props.blockArea} >
                        {props.description}
                    </p> : <p >{props.description}</p>
                }
                {props.children}
            </div>
        </div>
    )
}


export default Description;
