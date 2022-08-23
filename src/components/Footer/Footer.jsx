import React from 'react'

import {BsInstagram} from 'react-icons/bs'

import './Footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div>
        <div className='footer'>
            <img src={logo} alt="" />
            <BsInstagram />
        </div>
    </div>
  )
}

export default Footer