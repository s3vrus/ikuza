import React from 'react'
import girl from '../images/girl.png'

const Footer = () => {
  return (
    <div>
        <footer className="page-footer">
        <img src={girl} className='' alt=''/>
            <div className='wrapper'>
                <p>Designed and Developed by: Collin Osborne</p>
                <p>Inspired by: https://www.azuki.com/</p>
            </div>
      </footer>
    </div>

  )
}

export default Footer