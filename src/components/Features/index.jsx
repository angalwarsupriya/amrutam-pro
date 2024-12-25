import './index.css'

import React from 'react'

function Features() {
  return (
    <section id='features' className='features-bg-con d-flex'>
        <div className='feature-con d-flex align-items-center'>
            <img className='feature-img' alt='feature img' src='images/Frame 427319082.png'/>
            <p className='feature-p'>convenient online & 
            In-clinic consultations</p>
        </div>
        <div className='feature-con d-flex align-items-center'>
            <img className='feature-img' alt='feature img' src='images/Frame 427319083.png'/>
            <p className='feature-p'>Safe and effective treatment</p>
        </div>
        <div className='feature-con d-flex align-items-center'>
            <img className='feature-img' alt='feature img' src='images/Frame 427319084.png'/>
            <p className='feature-p'>Experienced Ayurvedic Practitioners</p>
        </div>
        <div className='feature-con d-flex align-items-center'>
            <img className='feature-img' alt='feature img' src='images/Frame 427319085.png'/>
            <p className='feature-p'>personalized Treatment 
            Plans & Guidance</p>
        </div>
    </section>
  )
}

export default Features