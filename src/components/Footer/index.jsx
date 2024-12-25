import './index.css'
import React from 'react'

function Footer() {
  return (
    <footer className='footer-bg-con'>
        <div className='footer-container'>
        <div className='footer-left-con'>
            <h6 className='footer-hea'>Get In Touch</h6>
            <p className='footer-p'>support@amrutam.co.in</p>
            <p className='footer-p'>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
            <p className='footer-p'>+91 9713171999</p>
            <div className='footer-icons-row d-flex'>
                <img src='images/Frame 1000006076.png' className='footer-icon' alt='facebook'/>
                <img src='images/Frame 1000006077.png' className='footer-icon' alt='instagram'/>
                <img src='images/Frame 1000006078.png' className='footer-icon' alt='you tube'/>
                <img src='images/Frame 1000006079.png' className='footer-icon' alt='twitter'/>
                <img src='images/Frame 1000006080.png' className='footer-icon' alt='linkdin'/>
                <img src='images/Frame 1000006081.png' className='footer-icon' alt='p'/>
            </div>
        </div>

        <div className='footer-right-con'>
            <h6 className='footer-hea'>Information</h6>
            <a className='footer-information-p' href={void(0)}>About Us</a>
            <a className='footer-information-p' href={void(0)}>Terms and Conditions</a>
            <a className='footer-information-p' href={void(0)}>Privacy Policy</a>
            <a className='footer-information-p' href={void(0)}>Privacy Policy for Mobile Apps</a>
            <a className='footer-information-p' href={void(0)}>Shipping and Returns Policy</a>
            <a className='footer-information-p' href={void(0)}>International Delivery</a>
            <a className='footer-information-p' href={void(0)}>For Businesses, Hotels and Resorts</a>
           
           <h6 className='footer-hea2'>Subscribe to our Newsletter and join Amrutam Family today!</h6>
           <div className='input-row-con d-flex'>
               <input type='search' placeholder='Your Email Address'/>
               <div className='search-con'>
                Subscribe
               </div>
           </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer