import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/next.png'
import previcon from '../../assets/prev.png'
import usericon from '../../assets/user.png'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if(tx>-50){
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx<0){
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className = 'testimonials'>
        <img src={nexticon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={previcon} alt="" className='prev-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usericon} alt="" />
                            <div>
                                <h3>Khizar
                                </h3>
                                </div>
                        </div>
                        <p>"I can't thank the repair shop team enough for their exceptional service! They fixed my refrigerator in record time, and now it's running better than ever. The technicians were friendly, knowledgeable, and went above and beyond to ensure everything was working perfectly. I highly recommend them to anyone in need of appliance repairs!"</p>
                    </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usericon} alt="" />
                            <div>
                                <h3>Tony
                                </h3>
                                </div>
                        </div>
                        <p>"What a fantastic experience with this repair shop! From the moment I called to schedule an appointment to the completion of the repair, everything was seamless. The staff was courteous, the service was prompt, and my washing machine is now working flawlessly. I'm incredibly impressed and grateful for their expertise. Definitely my go-to for any future appliance needs!"</p>
                    </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usericon} alt="" />
                            <div>
                                <h3>Abdul
                                </h3>
                                </div>
                        </div>
                        <p>"Absolutely thrilled with the service provided by this repair shop! My oven broke down unexpectedly, and I was worried about the hassle and cost of getting it fixed. However, the team here made the entire process stress-free. They diagnosed the issue quickly, gave me a fair quote, and had my oven back up and running in no time. Friendly staff, efficient service, and reasonable prices – couldn't ask for more. Highly recommended!"</p>
                    </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usericon} alt="" />
                            <div>
                                <h3>Ali
                                </h3>
                                </div>
                        </div>
                        <p>"Absolutely thrilled with the service provided by this repair shop! My oven broke down unexpectedly, and I was worried about the hassle and cost of getting it fixed. However, the team here made the entire process stress-free. They diagnosed the issue quickly, gave me a fair quote, and had my oven back up and running in no time. Friendly staff, efficient service, and reasonable prices – couldn't ask for more. Highly recommended!"</p>
                    </div>
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials