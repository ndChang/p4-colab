import React from 'react'
import './styles/nav.css'
function Nav(props) {
    return (
        <>
            <div className='nav'>
            <div className='line-bar'>
                <img src="https://i.imgur.com/2f0hWvM.png" alt="line-bar" />
            </div>
                <div className='site-title'>
                    <h1>IN A PINCH</h1>
                </div>
            <div className='nav-container'>
                <img className='icon-1' src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png' alt='user picture' />
                <p>ABOUT</p>
    <div className='cart-counter'>{props.count}</div>
                <img className='icon-2' src='https://www.searchpng.com/wp-content/uploads/2019/02/Shopping-Cart-PNG-Icon-715x715.png' alt='shopping cart' />
                </div>
            </div>
            <div className='Promo'>
                <p>GET YOUR FIRST 5 DELIVERIES FREE WITH CODE PINCH19</p>
                </div>
        </>
    )
}

export default Nav