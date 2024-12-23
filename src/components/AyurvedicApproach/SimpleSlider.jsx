

import Slider from "react-slick";


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className='ayurvedic-approach-card-sm'>
            <div className='number-round-sm'>1</div>
            <h6 className='ayurvedic-approach-card-hea'>Make Appointment</h6>
            <p className='ayurvedic-approach-card-p'>
              You must make an appointment in advance, to choose the service and date.
            </p>
          </div>
        </div>

        <div>
        <div className='ayurvedic-approach-card-sm'>
            <div className='number-round-sm'>2</div>
            <h6 className='ayurvedic-approach-card-hea'>Make Appointment</h6>
            <p className='ayurvedic-approach-card-p'>
              You must make an appointment in advance, to choose the service and date.
            </p>
          </div>
        </div>
        <div>

        <div className='ayurvedic-approach-card-sm'>
            <div className='number-round-sm'>3</div>
            <h6 className='ayurvedic-approach-card-hea'>Make Appointment</h6>
            <p className='ayurvedic-approach-card-p'>
              You must make an appointment in advance, to choose the service and date.
            </p>
          </div>          
        </div>
     
      </Slider>
    </div>
  )
  }


