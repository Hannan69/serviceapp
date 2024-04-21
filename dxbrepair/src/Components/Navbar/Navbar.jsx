import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuicon from '../../assets/menu.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);
  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className ={`container ${sticky? 'dark-nav' : ''}`}>
        
        <img src={logo} alt ="" className='logo'/>
        <ul className ={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><Link to ='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to ='services' smooth={true} offset={-260} duration={500}>Our Services</Link></li>
            <li><Link to ='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
            <li><Link to ='testimonials' smooth={true} offset={-150} duration={500}>Reviews</Link></li>
            <li><Link to ='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>

        </ul>
        <img src={menuicon} alt="" className ="menuIcon" onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar