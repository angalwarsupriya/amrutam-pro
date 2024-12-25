import './index.css'

import React from 'react'
import { IoMdStar } from "react-icons/io";

function AyurvedicExpertsCard() {
  return (
    <div className='ayurvedic-experts-card-container'>
            <div className='ayurvedic-experts-card'>
                
                <div className='ayurvedic-experts-card-top-con'>
                   <img src='images/Ellipse 725 (1).png' alt='ayurvedic expert' className='ayurvedic-experts-img'/>
                   <div className='rating-con'>
                    <p className='rating-p'>4.5</p>
                    <IoMdStar className='rating-star'/>
                   </div>

                   <h6 className='doctor-name'>Dr. Vaishali sharma</h6>
                   <p className='doctor-study-p'>Ayurveda Practitioner(BAMS, MD)</p>
                   <p className='doctor-year-of-experience'>🎓 25 years of experience</p>
                   <p className='experties-con'>💊 Skin Specialist</p>
                </div>

                <div className='ayurvedic-experts-card-bottom-green-con'>
                    <p>Book Consultaion</p>
                </div>
            </div>
        </div>
  )
}

export default AyurvedicExpertsCard