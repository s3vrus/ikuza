import React from 'react'
import girl from '../images/girl.png'

const Footer = () => {
  return (
    <div>
        <footer className="page-footer">
        <img src={girl} className='' alt=''/>
            <div className='wrapper'>
                <p>Designed and Developed by: <a href='https://collinosborne.dev' target="_blank" rel="noopener noreferrer">Collin Osborne</a></p>
                <p>Inspired by: <a href='https://www.azuki.com/' target="_blank" rel="noopener noreferrer">https://www.azuki.com/</a></p>
            </div>
      </footer>
    </div>

  )
}

export default Footer