import './index.css'
import AyurvedicExpertsCard from './AyurvedicExpertsCard';
import Slider from "react-slick";


import { MdOutlineArrowCircleRight } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";

// Custom next arrow component
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} custom-arrow`} style={{ ...style }} onClick={onClick}>
        <MdOutlineArrowCircleRight style={{ color: 'GRAY' }} className='arrow-icon' />
      </div>
    );
  }
  
  // Custom previous arrow component
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} custom-arrow`} style={{ ...style }} onClick={onClick}>
        <FiArrowLeftCircle style={{ color: 'GRAY' }} className='arrow-icon' />
      </div>
    );
  }


function AyurvedicExperts() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
            {
              breakpoint: 768, // medium devices
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              } 
            },
            {
              breakpoint: 650, // small devices
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };

    return (
        <section className='ayurvedic-experts-bg-con'> 

          <h1 className='ayurvedic-experts-hea'>Meet our Ayurveda experts</h1>
          <div className='ayurvedic-experts-cards-con'>
            <Slider {...settings}>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>
               <AyurvedicExpertsCard/>

    
            </Slider>

          </div>
          <button type='button' className='find-more-btn'>Find More Experts &gt;</button>

        </section>
  )
}

export default AyurvedicExperts

