import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars0.githubusercontent.com/u/67290471?s=460&u=3a40833b6b1e19b81017cb915f8af816f1e51ea7&v=4" 
          alt="Diego Eiras"
        />
        <div>
          <strong>Diego Eiras</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 mil pessoas já passaram pelas minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 1000,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
