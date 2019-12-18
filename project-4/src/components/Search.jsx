import React from 'react'
import './shared/styles/Search.css'

function Search(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <img className="search-icon" src='https://www.stickpng.com/assets/images/59cfc4d2d3b1936210a5ddc7.png' alt={props.alt} className='search-icon'/>
            <input onChange={props.onChange} placeholder={props.text} />
        </form>
    )
}

export default Search