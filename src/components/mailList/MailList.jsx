import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, Save Money!</h1>
      <h4 className='mailDesc'>Sign up and we'll reach you soon.</h4>
      <div className='mailInputContainer'>
        <input text = "text" placeholder='Your Email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
