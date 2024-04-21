import React from 'react'
import './About.css'
import aboutimg from '../../assets/repairing1.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} alt="" />
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Fixing the Pieces, Mending the Moments.</h2>
            <p>With a commitment to excellence and a passion for precision, Appliance Care Solutions stands as Dubai's premier destination for appliance repair services. Serving both residential and commercial clients, our expert technicians specialize in repairing a wide range of appliances, including refrigerators, washing machines, dishwashers, ovens, and more. Backed by years of experience and equipped with cutting-edge tools, we pride ourselves on delivering prompt, reliable, and cost-effective solutions to ensure your appliances are back in optimal working condition swiftly. Whether it's a minor fix or a major overhaul, trust Appliance Care Solutions to restore functionality and convenience to your home or business.</p>
            
        </div>
    </div>
  )
}

export default About