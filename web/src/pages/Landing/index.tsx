import React, { useState, useEffect } from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api'

import {
  PageLanding,
  Content,
  LogoContainer,
  ButtonsContainer,
  Button,
  HeroImage,
  TotalConnections,
} from './styles'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(({ data: { total } }) => {
      setTotalConnections(total)
    })
  }, [totalConnections])

  return (
    <PageLanding>
      <Content>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Platorma de estudos" />

        <ButtonsContainer>
          <Button to="study" primary>
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Button>

          <Button to="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Button>
        </ButtonsContainer>

        <TotalConnections>
          Total de
          {totalConnections}
          conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </Content>
    </PageLanding>
  )
}

export default Landing
