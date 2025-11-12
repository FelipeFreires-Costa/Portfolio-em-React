import React from 'react'
import { useNavigate } from 'react-router-dom'
import DarkVeil from './DarkVeil.jsx';
import './BoasVindas.css';
const BoasVindas = () => {

  const navigate = useNavigate()

  const irParaPortfolio = () =>{
    navigate('portfolio')
  }
  return (
  

    <div className='boas-vindas-container'>
      <div className="dark-veil-background">
        <DarkVeil />
      </div>
        <div className='bemvindo-container'>
          <h1 className='title'>Seja bem-vindo ao meu Portfólio!</h1>
          <p>Este site foi construído com React para demonstrar minhas habilidades.</p>

          <button onClick={irParaPortfolio} className='entrar-btn'>
            Entrar
          </button>
        </div>
    </div>
  )
}

export default BoasVindas