import React from 'react'

import homen from '../../assets/homen.png'
import logo from '../../assets/logo.png'

import './Solucao.css'

function Solucao() {
  return (
    <div className='solucao-container'>
        <img src={homen} alt="" />
        <div>
            <h1>SOLUÇÕES SOB MEDIDA <br></br>PARA <span>SUA EMPRESA</span></h1>
            <div className='solucao-cab-1'>
                <h3>Internet para microempresas</h3>
                <p>Planos que cabem no seu bolso</p>
            </div>
            <div className='solucao-cab'>
                <h3>Internet dedicada</h3>
                <p>Ideal para médias</p>
            </div>
            <div className='solucao-cab'>
                <h3>Data center</h3>
                <p>Ideal para médias e grandes empresas</p>
            </div>
            <div className='solucao-cab'>
                <h3>Internet para Co-Location</h3>
                <p>Ideal para médias e grandes empresas</p>
            </div>
        </div>

        <div className='logo-solucao'>
            <img src={logo} alt="" />

            <div className='button-solucao'>
                <h1>Há 19 anos trabalhando para oferecer aos nossos clientes a <br></br>melhor internet da região</h1>
                <button>QUERO ASSINAR!</button>
            </div>
        </div>
    </div>
  )
}

export default Solucao