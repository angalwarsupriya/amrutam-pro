import './index.css'

import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function MagicWithUs() {
  AOS.init();

  return (
    <section id='magicWithUs' className='magic-with-us-bg-con d-flex flex-column align-items-center'>

      <div className='magic-with-us-des-con d-flex flex-column align-items-center' >
        <h2 className='magic-with-us-hea'>Discover Ayurveda’s magic with us </h2>
        <p className='magic-with-us-p'>
          Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
          a totally effective approach for a better life. 
        </p>
      </div>


      <div className='magic-with-us-img-info-con-in-lg '>
          <div className='magic-with-us-left-cards-con'>

            <div className='magic-card1  d-flex align-items-center' data-aos="slide-right">
              <div className='magic-card-des-con magic-left-card'>
                <h4 className='magic-card-hea'>Personalized Wellness</h4>
                <p className='magic-card-p text-end'>
                    Get treatments made just for you based on your individual doshas ( body type)
                </p>
              </div>
              <img className='magic-card-logo' src='images/Frame 427319094.png' alt='Wellness'/>
            </div>

            <div className='magic-card2  d-flex align-items-center' data-aos="slide-right">
              <div className='magic-card-des-con magic-left-card'>
                <h4 className='magic-card-hea'>Focus on prevention</h4>
                <p className='magic-card-p text-end'>
                Stop problems even before they start.
                </p>
              </div>
              <img className='magic-card-logo' src='images/Frame 427319095.png' alt='focus'/>
            </div>

            <div className='magic-card3 d-flex align-items-center' data-aos="slide-right">
              <div className='magic-card-des-con magic-left-card'>
                <h4 className='magic-card-hea'>Mind-Body Connection</h4>
                <p className='magic-card-p text-end'>
                Keep your mind and body in sync for a happy life.
                </p>
              </div>
              <img className='magic-card-logo' src='images/Frame 427319096.png' alt='mind body'/>
            </div>


          </div>

          <div className='magis-with-us-img-con'>
             <img className='yoga-img' alt='yoga woman' src='images/Group 39477.png' />
          </div>


          <div className='magic-with-us-right-cards-con'>
            
            <div className='magic-card4  d-flex align-items-center' data-aos="slide-left">
              <img className='magic-card-logo' src='images/Frame 427319099.png' alt='health'/>
              <div className='magic-card-des-con magic-right-card'>
                <h4 className='magic-card-hea'>Holistic Healing</h4>
                <p className='magic-card-p'>
                Fix the root problem for long-lasting health.
                </p>
              </div>
            </div>

            <div className='magic-card5  d-flex align-items-center' data-aos="slide-left">
              <img className='magic-card-logo' src='images/Frame 427319098.png' alt='remedies'/>
              <div className='magic-card-des-con magic-right-card'>
                <h4 className='magic-card-hea'>Natural Remedies</h4>
                <p className='magic-card-p'>
                Using herbs and natural therapies for healing.
                </p>
              </div>
            </div>

            <div className='magic-card6  d-flex align-items-center' data-aos="slide-left">
              <img className='magic-card-logo' src='images/Frame 427319097.png' alt='boost immunity'/>
              <div className='magic-card-des-con magic-right-card'>
                <h4 className='magic-card-hea'>Boosting immunity</h4>
                <p className='magic-card-p'>
                Stay strong and healthy for life, not just for today.
                </p>
              </div>
            </div>
         
          </div>

      </div>







      <div className='magic-with-us-img-info-con-in-sm d-md-none'>

        <div className='magis-with-us-img-con-sm'>
          <img className='yoga-img' alt='yoga woman' src='images/Group 39477.png' />
        </div>
          <div className='magic-with-us-sm-cards-con'>
            <div className='magic-with-us-sm-card d-flex flex-column'>
                <img className='magic-card-sm-img' alt='icon' src='images/Frame 427319094.png'/>
                <h4 className='magic-card-hea'>Personalized Wellness</h4>
                <p className='magic-card-p'>
                    Get treatments made just for you based on your individual doshas ( body type)
                </p>
            </div>

            <div className='magic-with-us-sm-card d-flex flex-column'>
                <img className='magic-card-sm-img' alt='focus' src='images/Frame 427319095.png'/>
                <h4 className='magic-card-hea'>Focus on Prevention</h4>
                <p className='magic-card-p'>
                Stop problems even before they start.
                </p>
            </div>

            <div className='magic-with-us-sm-card d-flex flex-column'>
                <img className='magic-card-sm-img' alt='min body connection' src='images/Frame 427319096.png'/>
                <h4 className='magic-card-hea'>Mind-Body Connection</h4>
                <p className='magic-card-p'>
                Keep your mind and body in sync for a happy life.
                </p>
            </div>

            <div className='magic-with-us-sm-card d-flex flex-column'>
                <img className='magic-card-sm-img' alt='Health plus' src='images/Frame 427319099.png'/>
                <h4 className='magic-card-hea'>Holistic Healing</h4>
                <p className='magic-card-p'>
                Fix the root problem for long-lasting health.
                </p>
            </div>


            <div className='magic-with-us-sm-card d-flex flex-column'>
                <img className='magic-card-sm-img' alt='Natural Remedies' src='images/Frame 427319098.png'/>
                <h4 className='magic-card-hea'>Natural Remedies</h4>
                <p className='magic-card-p'>
                Using herbs and natural therapies for healing.
                </p>
            </div>

            <div className='magic-with-us-sm-card d-flex flex-column'>
                <img className='magic-card-sm-img' alt='icon' src='images/Frame 427319097.png'/>
                <h4 className='magic-card-hea'>Boosting Immunity</h4>
                <p className='magic-card-p'>
                Stay strong and healthy for life, not just for today.
                </p>
            </div>

          </div>

        </div>

    </section>
  )
}

export default MagicWithUs