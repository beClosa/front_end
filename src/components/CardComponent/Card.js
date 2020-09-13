import React from "react";
import ArrowRight from "../../images/icons/arrow-white-right.svg";
const Card = props => {
    return (
        <div className="card">
           {
               props.isFeature ? 
               <div className="card__wrapper">
               <div className="card__figure">
                   <img src={props.imageUrl} alt={props.alt}/>
               </div>
               <div className="card__heading">
                   <h3>
                       {props.heading}
                   </h3>
               </div>
               <div className="card__description">
                   <p>
                       {props.description}  
                   </p>
               </div>
           </div> : 
            <div className="card__wrapper">
            <div className="card__heading text-grey">
                <h3>
                    {props.heading}
                </h3>
            </div>
            <a href="https://veylectra.typeform.com/to/torkcFdg" className="card__description-arrow">
               <div className="card__description-arrow-item">
                    <p>
                        {props.description}  
                    </p>
               </div>
               <div className="card__description-arrow-item">
                   <img src={ArrowRight} alt="arrow white right"/>
               </div>
            </a>
        </div>
           }
        </div>
    )
}

export default Card;
