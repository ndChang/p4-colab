import React from 'react'

function Card (props) {
    return (
        <div className={props.className}>
            <img src={props.img}/>
        </div>
    )
}

export default Card