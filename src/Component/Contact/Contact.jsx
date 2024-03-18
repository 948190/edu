import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us message<img src={msg_icon} alt="" /></h3>
            <p>Feel free to contact us </p>
            <ul>
                <li><img  src={mail_icon} alt=""/>Conatct@Gresma.dev</li>
                <li><img  src={phone_icon} alt=""/>+91 9678876976</li>
                <li><img  src={location_icon} alt=""/>peenya dasarahlli<br/>
                kengeri,banglore-98675</li>

            </ul>

        </div>
        <div className='contact-col'>
        <form>
          <label>Your name</label>
          <input type='text' name='name' placeholder='enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='enter number' required/>
          <label>Enter your message here</label>
          <textarea name="message"  rows="6" placeholder='enter the message ' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now</button>
          

        </form>

        </div>

    </div>
  )
}

export default Contact