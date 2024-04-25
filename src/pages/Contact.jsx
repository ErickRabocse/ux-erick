import React from 'react'
import './pages.css'
import mail from '../img/envelope.jpg'
import linked from '../img/linkedin.png'
import gmail from '../img/gmail.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'

const Contact = () => {
  return (
    <div>
      <div className='contact' id='contact'>
        <div className='contact_img'>
          <img src={mail} alt='' className='mail_img' />
        </div>
        <div className='contact_text'>
          <h1 className='about-header' style={{ color: 'white' }}>Let's connect!</h1>
          <div className='networks'>
            <div className='linkedin_box box'>
              <span>
                <img className='network' src={linked} alt='' style={{ height: '40px' }} />
              </span>
            </div>
            <div className='mail_box box'>
              <span>
                <img className='network' src={gmail} alt='' style={{ height: '40px' }} />
              </span>
            </div>
            <div className='phone_box box'>
              <span>
                <img className='network' src={instagram} alt='' style={{ height: '40px' }} />
              </span>
            </div>
            <div className='whats_box box'>
              <span>
                <img className='network' src={whatsapp} alt='' style={{ height: '40px' }} />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
