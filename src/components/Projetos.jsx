import React, { useState } from 'react'
import ProjetoCard from './ProjetoCard'

const dadosDosProjetos = [
  {
    id: 1,
    titulo: 'App de Clima (API)',
    desc: 'Comsumo de API (async/await) para buscar clima em tempo real',
    link: 'link do projeto',
    img: 'imagem para colocar depois'
  },

  {
    id: 2, 
    titulo: 'Painel Financeiro (DOM)', 
    desc: 'Manipulação de DOM e persistência de dados com localStorage.',
    link: 'https://github.com/seu-usuario/painel-financeiro',
    img: '/img/projeto-financeiro.png'
  }
]
function Projetos(){
  //guardando os dados no estado
  const [projetos] = useState(dadosDosProjetos)

  return (
    <div className='projetos-container'>
      <h2>Projetos em Destaque</h2>
      <div className='projeto-grid'>
        {/*Mapeando os arrays de 'projetos' para criar os cards*/}
        {projetos.map(proj => (
          <ProjetoCard
          key={proj.id} //chave obrigatoria para react
          titulo={proj.titulo}
          descricao={proj.desc}
          link={proj.link}
          imagem={proj.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Projetos