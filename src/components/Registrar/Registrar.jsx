import React from 'react'

import './Registrar.css'

function Registrar() {
  return (
    <div className='registrar'>
        <div className='registrar-container'>
            <h1>Deixe seus dados e <br></br>logo entraremos em <br></br>contato</h1>
            <form>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input className='form-1' type="text" placeholder='Digite seu nome' />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input className='form-1' type="e-mail" placeholder='Digite seu email' />
                </div>
                <div>
                    <label htmlFor="">Telefone:</label>
                    <input className='form-1' type="number" placeholder='Digite seu telefone' />
                </div>
                <div>
                    <label htmlFor="">Cidade:</label>
                    <input className='form-1' type="text" placeholder='Digite o nome da sua cidade' />
                </div>

                <button>Enviar</button>
            </form>
            
        </div>
    </div>
  )
}

export default Registrar