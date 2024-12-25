import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function AyurvedicConsultations() {   

  AOS.init();

  return (
    <section id='AyurvedicConsultation' className='consultation-bg-con'>
       <h2 className='consultation-hea'>What sets Ayurvedic consultations apart?</h2>

       <div className='consultation-cards-con'>

          <div className='consultation-card1 ' data-aos="zoom-in">
            <h5 className='consultation-card-hindi-hea'>
              स्वस्थस्य स्वास्थ्य रक्षणं, <br/>
              आतुरस्य विकार प्रशमनं ।"
            </h5>
            <p className='consultaion-card1-p'>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>

          
          <div className='consultation-img-card card-2'  data-aos="zoom-in">
            <img className='consultation-img-card-img' alt='hair care' src='images/Rectangle 4144.png' />
          </div>

          <div className='consultation-content-card card-3'  data-aos="zoom-in">
            <h5 className='consultation-card-hea'>
              precise diagnosis
            </h5>
            <p className='consultaion-card1-p'>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>

          <div className='consultation-content-card card-4'  data-aos="zoom-in">
            <h5 className='consultation-card-hea'>
              Zero side-effects
            </h5>
            <p className='consultaion-card1-p'>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
 
          <div className='consultation-img-card card-5'  data-aos="zoom-in">
            <img className='consultation-img-card-img' alt='hair care' src='images/Rectangle 4146.png' />
          </div> 

          <div className='consultation-content-card card-6'  data-aos="zoom-in">
            <h5 className='consultation-card-hea'>
              Individual Treatment
             </h5>
            <p className='consultaion-card1-p'>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>

          <div className='consultation-img-card card-7'  data-aos="zoom-in">
            <img className='consultation-img-card-img' alt='hair care' src='images/Rectangle 4148.png' />
          </div>

       </div>
    </section>
  )
}

export default AyurvedicConsultations