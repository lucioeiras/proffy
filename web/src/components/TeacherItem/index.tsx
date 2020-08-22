import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import api from '../../services/api'

import { Container, Header, Footer } from './styles'

export interface Teacher {
  id: number
  name: string
  avatar: string
  bio: string
  whatsapp: string
  subject: string
  cost: number
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <Container>
      <Header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>

      <p>{teacher.bio}</p>

      <Footer>
        <p>
          Preço/hora
          <strong>
            R$
            {teacher.cost}
          </strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
          type="button"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </Container>
  )
}

export default TeacherItem
