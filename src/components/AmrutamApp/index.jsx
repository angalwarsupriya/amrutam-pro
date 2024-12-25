import './index.css'


import React from 'react'

function AmrutamApp() {
  return (
    <section id= 'appDetails' className='amrutamapp-bg-con'>

    <div className='amrutam-app-container-lg'>
      <div className='amrutamapp-con'>
        <div className='con1'>
            <h1 className='amrutamapp-hea'>Meet our Ayurveda experts</h1>
            <p className='amrutamapp-p'>
               The Amrutam Home App is your one-stop app for all things Ayurveda! 
               Apart from mimicking the significant characteristics of our website, 
               this app offers a wide range of additional features.
            </p>
        </div>

        

        <div className='con2'>
            <h2 className='amrutamapp-h2'>
              Get a diet & lifestyle consultation with ayurvedic experts across the globe 
            </h2>
            <h1 className='amrutam-hea3'>Get the App now</h1>
            <div className='app-imgs-con'>
                <img src='images/image 67.png' className='app-img'/>
                <img src='images/image 68.png' className='app-img'/>
            </div>

        </div>

        
      </div>

      <div className='img-con'>
          <img src='images/Group 39489.png' className='mobile-img'/>
      </div>     
      </div>
      



      <div className='amrutam-app-container-sm'>
        <div className='con1'>
            <h1 className='amrutamapp-hea'>Meet our Ayurveda experts</h1>
            <p className='amrutamapp-p'>
               The Amrutam Home App is your one-stop app for all things Ayurveda! 
               Apart from mimicking the significant characteristics of our website, 
               this app offers a wide range of additional features.
            </p>
        </div>

        <div className='img-con'>
          <img src='images/Group 39489.png' className='mobile-img'/>
        </div>  

        <div className='con2'>
            <h2 className='amrutamapp-h2'>
              Get a diet & lifestyle consultation with ayurvedic experts across the globe 
            </h2>
            <h1 className='amrutam-hea3'>Get the App now</h1>
            <div className='app-imgs-con'>
                <img src='images/image 67.png' className='app-img'/>
                <img src='images/image 68.png' className='app-img'/>
            </div>

        </div>

           
      </div>
    </section>
  )
}

export default AmrutamApp