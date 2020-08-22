import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container } from '../../styles/Container'

interface ButtonProps {
  readonly primary?: boolean
}

export const PageLanding = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`

export const Content = styled(Container)`
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  > img {
    height: 10rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 4.6rem;

    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;

    text-align: left;

    margin: 0;

    > img {
      height: 100%;
    }

    > h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 3.2rem 0;

  > a {
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`

export const Button = styled(Link)<ButtonProps>`
  height: 10.4rem;
  width: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-button-text);
  font: 700 2rem Archivo;
  text-decoration: none;

  border-radius: 0.8rem;
  background-color: ${props =>
    props.primary ? 'var(--color-primary-lighter)' : 'var(--color-secundary)'};

  transition: background-color 0.2s;

  &:first-child {
    margin-right: 1.6rem;
  }

  &:hover {
    background-color: ${props =>
      props.primary
        ? 'var(--color-primary-ligh)'
        : 'var(--color-secundary-dark)'};
  }

  > img {
    width: 4rem;

    margin-right: 2.4rem;
  }
`

export const TotalConnections = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;

  > img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`
