import styled from 'styled-components'

export const TextareaBlock = styled.div`
  position: relative;

  & + & {
    margin-top: 1.6rem;
  }

  > label {
    font-size: 1.4rem;
  }

  > textarea {
    height: 16rem;
    width: 100%;
    min-height: 8rem;

    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;

    background-color: var(--color-input-background);

    font: 1.6rem Archivo;

    padding: 1.2rem 1.6rem;
    margin-top: 0.8rem;

    outline: 0;
    resize: vertical;
  }

  &:focus-within::after {
    height: 2px;
    width: calc(100% - 3.2rem);

    content: '';

    background-color: var(--color-primary-light);

    position: absolute;
    right: 1.6rem;
    bottom: 0.7rem;
    left: 1.6rem;
  }
`
