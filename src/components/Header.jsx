import React from 'react'
import './Header.css'
import '../styles/variables.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h2> <span></span> Felipe Freires</h2>
      </div>
      <nav className='navbar'>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre Mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contatos</a>
      </nav>
    </header>
  )
}

export default Header