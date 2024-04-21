import React from 'react'
import './Services.css'
import service1 from '../../assets/machine.jpg'
import service2 from '../../assets/dish.jpg'
import service3 from '../../assets/fridge1.jpg'
import ricon from '../../assets/repair.png'
const services = () => {
  return (
    <div className = 'services'>
        <div className="service">
            <img src={service1} alt="" />
            <div className="caption">
                <img src={ricon} alt="" />
                <p>Washing Machine Repair</p>
            </div>
        </div>
        <div className="service">
            <img src={service2} alt="" />
            <div className="caption">
                <img src={ricon} alt="" />
                <p>DishWasher Repair</p>
            </div>
        </div>
        <div className="service">
            <img src={service3} alt="" />
            <div className="caption">
                <img src={ricon}  alt="" />
                <p>Refigerator Repair</p>
            </div>
        </div>
    </div>
  )
}

export default services