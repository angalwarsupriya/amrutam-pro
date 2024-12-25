import './index.css'


import SimpleSlider from './SimpleSlider'

function AyurvedicApproach() {
  return (
    <section id='ayurvedicApproach' className='ayurvedic-approach-bg-con'>

        <div className='ayurvedic-approach-content-con'>
            <h2 className='ayurvedic-approach-hea'>Our ayurvedic approach</h2>
            <p className='ayurvedic-approach-p'>
               Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, 
               a totally effective approach for a better life. 
            </p>
        </div>


        <div className='ayurvedic-approach-cards-con-lg'>
            <div className='ayurvedic-approach-card'>
              <div className='number-round'>1</div>
              <h6 className='ayurvedic-approach-card-hea'>Make Appointment</h6>
              <p className='ayurvedic-approach-card-p'>
              You must make an appointment in advance, to choose the service and date.
              </p>
            </div>
            <div className='ayurvedic-approach-card'>
              <div className='number-round'>2</div>
              <h6 className='ayurvedic-approach-card-hea'>Consultations</h6>
              <p className='ayurvedic-approach-card-p'>
              The next stage involves a thorough consultation with an Ayurveda practitioner.
              </p>
            </div>
            <div className='ayurvedic-approach-card'>
              <div className='number-round'>3</div>
              <h6 className='ayurvedic-approach-card-hea'>Treatment Planning</h6>
              <p className='ayurvedic-approach-card-p'>
              The Ayurvedic practitioner creates a personalized treatment plan for you
              </p>
            </div>
            <div className='ayurvedic-approach-card'>
              <div className='number-round'>4</div>
              <h6 className='ayurvedic-approach-card-hea'>Maintenance</h6>
              <p className='ayurvedic-approach-card-p'>
              These visits allow for assessment of progress, adjustments to the treatment.
              </p>
            </div>
        </div>
      

        <div className='ayurvedic-approach-cards-con-sm'>
            <SimpleSlider/>
        </div>
       
    </section>
  )
}

export default AyurvedicApproach