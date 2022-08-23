import React from 'react'

import './Header.css'

import logo from '../../assets/logo.png'

function Header() {
  return (
    <div>
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div id="linha-vertical"></div>
            <div className='text'>
                <h1>Altíssima Velocidade</h1>
                <h2>Onde você estiver!</h2>
            </div>
        </nav>
    </div>
  )
}

export default Header