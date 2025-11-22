import React from 'react'
import './Sobre.css'


const Sobre = () => {
  return (
  <div className='sobre-container'>
        <h2>Sobre Mim</h2>
        <p>Transformando ideias em experiências digitais</p>
    <div className='sobre-content'>
        <div className='sobre-image'>
            <img src='/public/foto.jpg' alt="foto perfil felipe" className='perfil-img'/>
        </div>
        <div className="sobre-texto-content">
            <h1> Olá, me chamo <br/> <span>Felipe Freires</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas numquam fuga, eligendi veniam officia impedit praesentium magnam ipsa consequatur. Odio sunt ullam, laborum nam repudiandae ex corrupti a architecto.
            </p>
                <div className='sobre-buttons'>
                  <a href="">
                  <button className='curriculo'> <img src="./src/assets/document.svg" alt="" />Download CV</button>
                  </a>
                  <a href="">
                  <button className='github'> <img src="./src/assets/github.svg" alt="" /> GitHub</button>
                  </a>
                </div>
        </div>
</div>
  </div>
  )
}

export default Sobre