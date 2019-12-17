import React from 'react'
import './styles/card.css'




const Card = (props) => {
        return (
            <div className="main-card-cont">
            <div className="main-card">
            <img src={props.image} />
            <div>{props.recipeName}</div>
            <div>Prep Time: {props.prepTime}</div>
            </div>
            </div>
        )
}
    
export default Card
