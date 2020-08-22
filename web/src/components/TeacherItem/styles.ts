import styled from 'styled-components'

export const Container = styled.article`
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;

  background-color: var(--color-box-base);

  margin-top: 2.4rem;

  overflow: hidden;

  & > p {
    font-size: 1.6rem;
    line-height: 2.8rem;

    padding: 0 2rem;
  }

  @media (min-width: 700px) {
    & > p {
      padding: 3.2rem;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 3.2rem 2rem;

  > img {
    height: 8rem;
    width: 8rem;

    border-radius: 50%;
  }

  > div {
    margin-left: 2.4rem;

    > strong {
      display: block;

      color: var(--color-text-title);
      font: 700 2.4rem Archivo;
    }

    > span {
      display: block;

      color: var(--color-text-base);
      font-size: 1.6rem;

      margin-top: 0.8rem;
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid var(--color-line-in-white);

  background-color: var(--color-box-footer);

  padding: 3.2rem 2rem;
  margin-top: 3.2rem;

  > p {
    > strong {
      display: block;

      color: var(--color-primary);
      font-size: 1.6rem;
    }
  }

  > a {
    width: 20rem;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border: 0;
    border-radius: 0.8rem;

    background-color: var(--color-secundary);

    color: var(--color-button-text);
    font: 700 1.6rem Archivo;
    text-decoration: none;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;

    > p {
      > strong {
        display: initial;

        margin-left: 1.6rem;
      }
    }

    > button {
      width: 24.5rem;

      justify-content: center;

      font-size: 1.6rem;

      > img {
        margin-right: 1.6rem;
      }
    }
  }
`
