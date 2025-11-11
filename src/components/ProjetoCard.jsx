import React from 'react'

//recebemos os dados (titulo, desc, link e imagem)
function ProjetoCard({titulo, descricao, link, imagem}){
  return(
    <a href={link} target="_blank" rel="noopener noreferrer" className="projeto-card">
      <img src={imagem} alt={`Imagem do Projeto ${titulo}`} />
      <div className='card-info'>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </a>
  )
}


export default ProjetoCard