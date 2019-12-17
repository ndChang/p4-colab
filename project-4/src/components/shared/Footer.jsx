import React from 'react'
import './styles/footer.css'

function Footer() {
    return (
        <>
        <div className='foot-container'>
         <h2 className='foot-title'>IN A PINCH</h2>
        <div className='login-about'>
         <p>Login</p>
         <p>About</p>
         </div>
         <div className='terms-privacy'>
         <p>Terms & Conditions</p>
         <p>Privacy Policy</p>
         </div>
         <div className='contact'>
         <p>CONTACT</p>
         <p className='email'>info@inapinch.com</p>
         </div>
         <div className='social-media'>
             <p>FOLLOW US</p>
             <img src='https://www.freepngimg.com/thumb/social_media/74167-on-networking-like-service-icons-media-us.png'>

             </img>
         </div>
        <p className='copyright'>© 2019, In a Pinch</p>
         </div>
        </>
    )
}

export default Footer