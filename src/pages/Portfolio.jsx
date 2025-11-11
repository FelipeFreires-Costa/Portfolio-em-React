import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import FaculdadeCard from '../components/FaculdadeCard';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

function Portfolio(){
  return (
  <div className="portfolio-container">
      
      {/* Pedaço 1: O Cabeçalho Fixo */}
      <Header />

      {/* Usamos <main> para o conteúdo principal */}
      <main>
        
        {/* Pedaço 2: Abertura (Foto e Nome) */}
        {/* Damos um ID para o link do Header funcionar */}
        <section id="home">
          <Hero />
        </section>

        {/* Pedaço 3 e 4: Sobre Mim + Faculdade */}
        <section id="sobre" className="sobre-section">
          <Sobre />
          <FaculdadeCard />
        </section>

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