import React from 'react'
import './Habilidades.css'

const Habilidades = () => {
  return (
    <div className="habilidades-container">
      <h2>Minhas Ferramentas</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <img src="./src/assets/html-5-svgrepo-com.svg" alt="html 5" />
          <p>HTML 5</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/css-3-svgrepo-com.svg" alt="css 3" />
          <p>CSS 3</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/js-svgrepo-com.svg" alt="javaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/react-icon.svg" alt="react" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/github-mark-white.svg" alt="github" />
          <p>GitHub</p>
        </div>
      </div>
    </div>
  )
}

export default Habilidades