import React from 'react'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-texto'>
        <h3>Front-End Developer</h3>
        <h1> Olá, me chamo <br></br> <span>Felipe Freires</span></h1>


      <p className='paragrafo'>Desenvolvedor Front-End. Transformo ideias em experiências digitais que unem beleza e funcionalidade. Focado em interfaces modernas e responsivas.</p>
      <div className='linguagens'>
        
        <p>React</p>
        <p>JavaScript</p>
        <p>Html</p>
        <p>CSS</p>
      </div>
      <button className='entre-contato'>Entre em Contato</button>
      <button className='saiba-mais'>Projetos <img src="./src/assets/share.svg" alt="" /> </button>
      </div>
      <div className='hero-image'>
        <img src='/public/foto.jpg' alt="foto perfil felipe" className='perfil-img'/>
      </div>
    </div>
  )
}

export default Hero