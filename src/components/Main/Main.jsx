import React from 'react'

import './Main.css'

import assinar from '../../assets/assine.png'
import meiosite from '../../assets/MEIO-SITE.png'

const Main = () => {
  return (
    <div>
        <div className="container">
            <div className='text-main'>
                <h1>INTERNET SOB MEDIDA <br></br>
                PARA <span>VOCÊ</span>, VEM SE CONECTAR!
                </h1>
                <p>A melhor internet e os melhores streamings do mercado</p>
                <img width="50%" src={assinar} alt="" />
                <button>QUERO ASSINAR!</button>
            </div>
            <div className="imagem-main" width="50%">
                <img width='100%' className='img-main' src={meiosite} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main