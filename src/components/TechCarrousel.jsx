import React from 'react'
import "./TechCarousel.css"; 


const stacks = [
  { name: "React", icon: "/src/assets/icons/react.svg" },
  { name: "JavaScript", icon: "/src/assets/icons/js.svg" },
  { name: "Tailwind", icon: "/src/assets/icons/tailwind.svg" },
  { name: "CSS3", icon: "/src/assets/icons/css.svg" },
  { name: "HTML5", icon: "/src/assets/icons/html.svg" },
]


export default function TechCarrousel(){
  return (
    <div className="carousel-container">
      <div className="carousel-fade-left" />
      <div className="carousel-fade-right" />

      <div className="carousel-track">
        {/* triplicado para garantir loop perfeito */}
        {[...stacks, ...stacks, ...stacks,].map((tech, index) => (
          <div className="carousel-item" key={index}>
            <img src={tech.icon} alt={tech.name} className="carousel-icon" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}