import React from 'react'
import './Contact.css'
import contacticon from '../../assets/contact.png'
import emailicon from '../../assets/mail.png'
import phoneicon from '../../assets/phone.png'
import locationicon from '../../assets/location.png'
import arrow1 from '../../assets/arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "422f2e14-47dd-48d5-a662-e1fd1e166a11");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={contacticon}alt="" /></h3>
            <p>Feel free to reach out throught is contact form. We will get back to you ASAP!</p>
            <ul>
                <li>
                   <img src={emailicon} alt="" /> hannanppp@gmail.com
                </li>
                <li>
                   <img src={phoneicon} alt="" /> +1 123-456-7890
                </li>
                <li>
                    <img src={locationicon} alt="" />
                123 Sheikh Zayed Road, Al Barsha 1
                    Dubai, United Arab Emirates
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your number'></input>
                <label>Write your Complaint</label>
                <textarea name="message" rows="6" placeholder="Enter Your Complaint" required></textarea>
                <button type ='submit' className='btn dark-btn'>Submit Now <img src={arrow1} className="whiteArrow" alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact