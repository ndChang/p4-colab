import React from 'react'

function Card(props) {
        return (
            <div className="main">
            <h4>Hello I am card</h4>

            {props.recipes}
            {props.image}
            </div>
        )
    
}
export default Card
