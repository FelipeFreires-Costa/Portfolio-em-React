import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import FaculdadeCard from '../components/FaculdadeCard';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <Header />
      <main>
        <section id='home'>
          <Hero />
        </section>

        <section id='sobre' className='sobre-section'>
          <Sobre />
          <FaculdadeCard />
        </section>

        <section id='habilidades' className='habilidades-section'>
          <Habilidades />
        </section>

        <section id='projetos' className='projetos-section'>
          <Projetos />
        </section>

        <section id='contato' className="contato-section">
          <Contato />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Portfolio