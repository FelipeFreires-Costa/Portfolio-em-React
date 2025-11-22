import React from 'react'
import "./FaculdadeCard.css"

const FaculdadeCard = () => {
  return (
    <div className='faculdade-card'>
      <div className='faculdade-title'>
        
      <h3><img src="./src/assets/college-svgrepo-com.svg" alt="" />Sistemas de Informação</h3>
      </div>
      <p className='uni'>Universidade UniCatolica</p>
      <p className='conc'>2022 - 2026</p>
    </div>
  )
}

export default FaculdadeCard