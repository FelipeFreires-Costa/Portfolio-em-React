import React from 'react'
import './Sobre.css'
import '../styles/variables.css'

const Sobre = () => {
  return (
    <div className='sobre-container'>
  <h2>Sobre Mim</h2>

        <div className='sobre-image'>
            <img src='/public/foto.jpg' alt="foto perfil felipe" className='perfil-img'/>
        </div>
        <div className="sobre-texto-content">
            <h1> Olá, me chamo <br/> <span>Felipe Freires</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas numquam fuga, eligendi veniam officia impedit praesentium magnam ipsa consequatur. Odio sunt ullam, laborum nam repudiandae ex corrupti a architecto.
            </p>
             {/* FUTUROS BOTÕES VIRÃO AQUI */}
        </div>
</div>
  )
}

export default Sobre