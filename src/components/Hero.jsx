import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-texto'>

        <h1> Olá, me chamo <span>Felipe Freires</span></h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Evoluindo no front-end e construindo experiência',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Evoluindo no front-end e construindo projetos',
        1000,
        'Evoluindo no front-end e construindo soluções',
        1000,
        'Evoluindo no front-end e construindo conhecimento',
        1000
      ]}
      wrapper="p"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        <h3>Front-End</h3>
        <p className='paragrafo'>Sou um dev front-end iniciante, mas extremamente dedicado. Estou cursando Sistemas de Informação e focado em evoluir rápido, sempre construindo projetos reais e aprendendo novas tecnologias.</p>
      <button className='entre-contato'>Entre em Contato</button>
      <button className='saiba-mais'>Saiba Mais</button>
      </div>
      <div className='hero-image'>
        <img src='/public/foto.jpg' alt="foto perfil felipe" className='perfil-img'/>
      </div>
    </div>
  )
}

export default Hero