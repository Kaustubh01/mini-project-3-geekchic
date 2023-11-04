import React from 'react'
import Discover from '../components/Discover'
import wallpaper from '../images/wallpaper.svg'
import wallpaper2 from '../images/wallpaper2.jpg'
import Section2 from '../components/Section2'
import './styles/Home.css'
import Footer from '../components/Footer'
import Slider from 'react-slick'

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,
    cssEase: "linear"
  };
  return (
    <>
      <Discover/>
      <div >
        <Slider {...settings}>
          <div className='card'style={{
            height:"200px",
            width:"200px"
          }}>
          <img src={wallpaper} alt="" />
          </div>
          <div className='card' style={{
            height:"200px",
            width:"200px"
          }}>
          <img src={wallpaper2} alt="" />
          </div>
        </Slider>
      </div>
      <Section2/>
      <Footer/>
      
    </>
  )
}

export default Home