import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
const Hero = () => {
  return (
    <div className ='hero container'>
        <div className="hero-text">
            <h1>We Provide Home Appliance Repair Services in Dubai</h1>
            <p>Solution for all of your Appliances </p>
            <button className='btn'>Explore More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero