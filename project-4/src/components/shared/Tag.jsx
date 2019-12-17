import React from 'react'

function Tag(props) {
return <button className={props.className} onClick={props.onClick}>{props.name}</button>
} 

export default Tag