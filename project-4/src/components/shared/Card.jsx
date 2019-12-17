import React, {Component} from 'react'


const Card = (props) => {
        console.log(props.recipe)
        return (
            <div className="main">
            <img src={props.recipe.image} />
            <div>{props.recipe.label}</div>
            <div>{props.recipe.totalTime}</div>
            <div></div>
            </div>
        )
}
    
export default Card
