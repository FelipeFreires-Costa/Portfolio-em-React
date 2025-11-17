import React from 'react'
import { useNavigate } from 'react-router-dom'
import DarkVeil from './DarkVeil.jsx';
import './BoasVindas.css';
import Icon from '../assets/code.svg'
import IconGit from '../assets/github.svg'
import IconReact from '../assets/react.svg'
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
          <div className='icons'> 
            <img src={Icon} alt="" />
            <img src={IconGit} alt="" />
            <img src={IconReact} alt="" />
          </div>
          <h1 className='title'>Seja bem-vindo ao meu <span>Portfólio!</span> </h1>
          <p>Este site foi construído com React para demonstrar minhas habilidades.</p>

          <button onClick={irParaPortfolio} className='entrar-btn'>
            Entrar
          </button>
        </div>
    </div>
  )
}

export default BoasVindas