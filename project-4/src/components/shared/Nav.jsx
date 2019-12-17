import React from 'react'
import './styles/nav.css'
function Nav() {
    return (
        <>
            <div className='nav'>

                <h1 className='site-title'>Meal Plan</h1>
            <div className='nav-container'>
                <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png' alt='user picture'></img>
                <p>About</p>
                <img src='https://www.searchpng.com/wp-content/uploads/2019/02/Shopping-Cart-PNG-Icon-715x715.png' alt='shopping cart'></img>
                </div>
            </div>
            <div className='Promo'>Promo: Free Shipping on first five orders</div>
        </>
    )
}

export default Nav