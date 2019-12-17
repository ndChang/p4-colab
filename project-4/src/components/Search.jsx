import React from 'react'
import './styles/Search.css'


function Search(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <img src={props.src} alt={props.alt}/>
            <input onChange={props.onChange} placeholder={props.text} />
        </form>
    )
}

export default Search