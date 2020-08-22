import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import { PageHeaderContainer, TopBar, HeaderContent } from './styles'

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <PageHeaderContainer>
      <TopBar>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </PageHeaderContainer>
  )
}

export default PageHeader
