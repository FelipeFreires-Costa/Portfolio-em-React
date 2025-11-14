import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import FaculdadeCard from '../components/FaculdadeCard';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import LightRays from './LightRays.jsx';
import './Portfolio.css'

function Portfolio(){
  return (
  <div className="portfolio-container">
    <div className='background-area'>
    <Header />
      <div className='light-rays-container'>
        <LightRays
    raysOrigin="top-center"
    raysColor="#8C4EE0"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
      </div>

<div className='container-principal'>
        <section id="home">
          <Hero />
        </section>

</div>

    </div>
        <section id="sobre" className="sobre-section">
          <Sobre />
          <FaculdadeCard />
        </section>

      <main>

        {/* Pedaço 5: Habilidades (Ícones) */}
        <section id="habilidades" className="habilidades-section">
          <Habilidades />
        </section>
        
        {/* Pedaço 6: Projetos (Os Cards) */}
        <section id="projetos" className="projetos-section">
          <Projetos />
        </section>

        {/* Pedaço 7: Contato */}
        <section id="contato" className="contato-section">
          <Contato />
        </section>

      </main>
      
      {/* Pedaço 8: Rodapé */}
      <Footer />
    </div> 
      
  )
}

export default Portfolio