import React from 'react'

function Tag(props) {
return <button onClick={props.onClick}>{props.name}</button>
} 

export default Tag