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


         
<div className='second-footer'>
    <div className='img-container'>
    <img src=''></img>
    <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'></img>
    <img src='http://www.free-icons-download.net/images/solid-heart-shape-icon-75343.png'></img>
</div>

<div className='words-container'>
    <p>Home</p>
    <p>Account</p>
    <p>Favorites</p>
    </div>


    
</div>
        </>
    )
}

export default Footer