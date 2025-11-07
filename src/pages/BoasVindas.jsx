import React from 'react'
import { useNavigate } from 'react-router-dom'


const BoasVindas = () => {

  const navigate = useNavigate()

  const irParaPortfolio = () =>{
    navigate('portfolio')
  }
  return (
    <div>
      <h1>Seja bem-vindo ao meu Portfólio!</h1>
      <p>Este site foi construído com React para demonstrar minhas habilidades.</p>

      <button onClick={irParaPortfolio}>
        Entrar
      </button>
    </div>
  )
}

export default BoasVindas