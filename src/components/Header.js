import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { GiSailboat } from 'react-icons/gi'

const Header = () => {
  return (
    <div className="sticky">
      <nav className="navbar">
        <div className="wrapper">
          <div className="nav-header">
              <div className="nav-logo">
                IKUZA
              </div>
              <ul>
                <li className='nav-icons'><AiOutlineTwitter /></li> 
                <li className='nav-icons'><AiFillInstagram /></li>
                <li className='nav-icons'><FaDiscord /></li> 
                <li className='nav-icons'><GiSailboat /></li>                 
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header