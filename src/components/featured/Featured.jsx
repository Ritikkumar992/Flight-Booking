import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img className='featuredImg' src='https://images.pexels.com/photos/3787840/pexels-photo-3787840.jpeg?cs=srgb&dl=pexels-ivan-siarbolin-3787840.jpg&fm=jpg'></img>
            <div className='featuredTitles'>
                <h1>Duabi</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' src='https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?cs=srgb&dl=pexels-jeswin-thomas-1007427.jpg&fm=jpg'></img>
            <div className='featuredTitles'>
                <h1>Delhi</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' src='https://images.pexels.com/photos/8627909/pexels-photo-8627909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/8627909/pexels-photo-8627909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
            <div className='featuredTitles'>
                <h1>Srinagar</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
