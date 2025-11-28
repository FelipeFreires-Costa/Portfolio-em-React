import React from 'react'
import './Habilidades.css'

const Habilidades = () => {
  return (
    <div className="habilidades-container">
      <h2>Minhas Ferramentas</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <img src="./src/assets/icons/html.svg" alt="html 5" />
          <p>HTML 5</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/icons/css.svg" alt="css 3" />
          <p>CSS 3</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/icons/js.svg" alt="javaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <img src="./src/assets/icons/react.svg" alt="react" />
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