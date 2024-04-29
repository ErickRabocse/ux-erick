import React from 'react'
import './pages.css'
import mail from '../img/envelope.jpg'
import linked from '../img/linkedin.png'
import gmail from '../img/gmail.png'
import github from '../img/github.png'
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
                <a href='https://www.linkedin.com/in/erick-ch%C3%A1vez-2944ba89/' target='_blank'>
                  <img className='network' src={linked} alt='' style={{ height: '40px' }} />
                </a>
              </span>
            </div>
            <div className='git_box box'>
              <span>
                <a href='https://github.com/ErickRabocse' target='_blank'>
                  <img className='network' src={github} alt='' style={{ height: '40px' }} />
                </a>
              </span>
            </div>
            <div className='mail_box box'>
              <span>
                <a href='mailto:erickchavezescobar@gmail.com'>
                  <img className='network' src={gmail} alt='' style={{ height: '40px' }} />
                </a>
              </span>
            </div>
            <div className='whats_box box'>
              <span>
                <a href='https://wa.me/527297294511/?text=Hi%20Erick%2C%20I%20want%20to%20get%20in%20touch%20with%20you.' aria-label='Chat on WhatsApp' alt='Chat on WhatsApp' target='_blank'>
                  <img className='network' src={whatsapp} alt='' style={{ height: '40px' }} />
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
