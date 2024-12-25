import './index.css'

import Slider from "react-slick";


import { IoMdStar } from "react-icons/io";
  
function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
      {
        breakpoint: 900, // medium devices
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
  }

    return (
        <section id='reviews' className='reviews-bg-con'>                
            <h2 className='reviews-hea'>Stories from our valued Customers!</h2>
            <div className='review-slides-con'>
                <Slider {...settings}>
                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                          <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                      
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                    <div className='review-slide-card'>
                      <div className='reviw-card'>
                      <div className='sider-card-top-con'>
                              <h6 className='sider-card-top-con-title'>Consulted for Skin</h6>
                          </div>
                          <div className='slider-bottom-con'>
                               <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex d'>
                                <div className='profile-round'></div>
                                <div className='profile-details'>
                                  <p className='profile-name'>Sophie Moore</p>
                                  <p className='profile-adress'>Mumbai</p>
                                  
                                </div>
                                </div>
                                <p className='date-p'>17/02/24</p>
                               </div>
                               <div className='stars-row'>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                                  <IoMdStar className='star'/>
                               </div>
                               <h6 className='review-title'>“One of a kind service”</h6>
                               <p className='review-p'>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                          </div>
                      </div>
                    </div>

                </Slider>
            </div>
          
        </section>
  )
}

export default Reviews;

