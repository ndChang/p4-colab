import React from 'react'
import './styles/card.css'




const Card = (props) => {
        return (
            <div className="main-card-cont">
            <div className="main-card">
            <img src={this.props.image} />
            <div>{this.props.recipeName}</div>
            <div>Prep Time: {props.totalTime}</div>
            </div>
            </div>
        )
}
    
export default Card
