import React from 'react'
import './Search.css'


function Search(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input onChange={props.onChange} placeholder={props.text} />
        </form>
    )
}

export default Search