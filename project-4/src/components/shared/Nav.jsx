import React from 'react'
import './styles/nav.css'
function Nav() {
    return (
        <>
            <div className='nav'>
            <p className='cart-counter'></p>

                <h1 className='site-title'>IN A PINCH</h1>
            <div className='nav-container'>
                <img  className='user-pic' src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png' alt='user picture'></img>
                <p>ABOUT</p>
                <img src='https://www.searchpng.com/wp-content/uploads/2019/02/Shopping-Cart-PNG-Icon-715x715.png' alt='shopping cart'>
                </img>


                </div>
            </div>
            <div className='Promo'>
                <p>GET YOUR FIRST 5 DELIVERIES FREE WITH CODE PINCH19</p>
                </div>
        </>
    )
}

export default Nav