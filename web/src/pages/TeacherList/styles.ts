import styled from 'styled-components'

import { Container } from '../../styles/Container'
import { InputBlock } from '../../components/Input/styles'
import { SelectBlock } from '../../components/Select/styles'

export const PageTeacherList = styled(Container)`
  height: 100vh;
  width: 100vw;

  > main {
    width: 90%;

    margin: 3.2rem auto;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    > main {
      max-width: 740px;

      padding: 3.2rem 0;
      margin: 0 auto;
    }
  }
`

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  > ${SelectBlock} + ${InputBlock} {
    margin-top: 1.6rem;
  }

  > ${InputBlock}, ${SelectBlock} {
    > label {
      color: var(--color-text-in-primary);
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;

    position: absolute;
    bottom: -28px;

    > ${SelectBlock} + ${InputBlock}, ${SelectBlock} + ${SelectBlock} {
      margin-top: 0;
    }
  }
`
