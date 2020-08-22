import styled from 'styled-components'

export const SelectBlock = styled.div`
  position: relative;

  & + & {
    margin-top: 1.6rem;
  }

  > label {
    font-size: 1.4rem;
  }

  > select {
    height: 5.6rem;
    width: 100%;

    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;

    background-color: var(--color-input-background);

    font: 1.6rem Archivo;

    padding: 0 1.6rem;
    margin-top: 0.8rem;

    outline: 0;
  }

  &:focus-within::after {
    height: 2px;
    width: calc(100% - 3.2rem);

    content: '';

    background-color: var(--color-primary-light);

    position: absolute;
    right: 1.6rem;
    bottom: 0;
    left: 1.6rem;
  }
`
