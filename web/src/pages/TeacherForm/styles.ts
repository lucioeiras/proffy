import styled from 'styled-components'

import { Container } from '../../styles/Container'

import {
  PageHeaderContainer,
  HeaderContent,
} from '../../components/PageHeader/styles'
import { InputBlock } from '../../components/Input/styles'

export const PageTeacherForm = styled(Container)`
  height: 100vh;
  width: 100vw;

  > ${PageHeaderContainer} {
    > ${HeaderContent} {
      margin-bottom: 6.4rem;
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    > ${PageHeaderContainer} {
      > ${HeaderContent} {
        margin-bottom: 0;
      }
    }
  }
`

export const Main = styled.main`
  width: 100%;
  max-width: 74rem;

  border-radius: 0.8rem;
  background-color: var(--color-box-base);

  padding-top: 6.4rem;
  margin: -3.2rem auto 3.2rem;

  overflow: hidden;

  > label {
    color: var(--color-text-complement);
  }
`

export const Fieldset = styled.fieldset`
  border: 0;

  padding: 0 2.4rem;

  & + & {
    margin-top: 6.4rem;
  }

  > legend {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--color-line-in-white);

    color: var(--color-text-title);
    font: 700 2.4rem Archivo;

    margin-bottom: 2.4rem;
    padding-bottom: 1.6rem;

    > button {
      border: 0;
      background: none;

      color: var(--color-primary);
      font: 700 1.6rem Archivo;

      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: var(--color-primary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`

export const Footer = styled.footer`
  border-top: 1px solid var(--color-line-in-white);
  background-color: var(--color-box-footer);

  padding: 4rem 2.4rem;
  margin-top: 6.4rem;

  > p {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-text-complement);
    font-size: 1.4rem;
    line-height: 2.4rem;

    > img {
      margin-right: 2rem;
    }
  }

  > button {
    height: 5.6rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    border: 0;
    border-radius: 0.8rem;
    background-color: var(--color-secundary);

    color: var(--color-button-text);
    font: 700 1.6rem Archivo;

    margin-top: 3.2rem;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      justify-content: space-between;
    }

    > button {
      width: 20rem;

      margin-top: 0;
    }
  }
`

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;

    > ${InputBlock} {
      margin-top: 0 !important;
    }
  }
`
