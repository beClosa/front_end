import React from "react";

const SectionComponent = props => {
    return (
        <section className={props.className}>
            {
                props.children
            }
        </section>
    )
}

export default SectionComponent;
