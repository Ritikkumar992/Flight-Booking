import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='fLists'>
        <ul className='fList'>
            <li className='fListItem'>Home</li>
            <li className='fListItem'>Flights</li>
            <li className='fListItem'>Domestic Airlines</li>
            <li className='fListItem'>My Trips</li>
        </ul>
        <ul className='fList'>
            <li className='fListItem'>Goa</li>
            <li className='fListItem'>Kashmir</li>
            <li className='fListItem'>Andman</li>
            <li className='fListItem'>Kerla</li>
            <li className='fListItem'>Dubai</li>
            <li className='fListItem'>All Packages</li>
        </ul>
        <ul className='fList'>
            <li className='fListItem'>About Us</li>
            <li className='fListItem'>Contact</li>
            <li className='fListItem'>Privacy Policy</li>
            <li className='fListItem'>Terms and Conditions</li>
        </ul>
        <div className='contact'>
            <h3>Call Us</h3>
            <span>0999932-12</span><br/>
            <span>+91-984393893</span>
            <h3>Email</h3>
            <span>support@flightTravel.com</span>
            <h3>Follow Us</h3>
        </div>
      </div>
      <div className='fText'>© 2022 FlightBooking. All Rights Reserved.</div>
    </div>
  )
}

export default Footer
