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
                <a href='#mint'>
                  IKUZA
                </a>
              </div>
              <ul>
                <li className='nav-icons'><a href='https://twitter.com/AzukiZen' target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a></li> 
                <li className='nav-icons'><a href='https://www.instagram.com/azuki_zen/' target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></li>
                <li className='nav-icons'><a href='https://discord.com/invite/azuki' target="_blank" rel="noopener noreferrer"><FaDiscord /></a></li> 
                <li className='nav-icons'><a href='https://opensea.io/collection/azuki' target="_blank" rel="noopener noreferrer"><GiSailboat /></a></li>                 
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header