import styled from 'styled-components'

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`

export const TopBar = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--color-text-in-primary);

  padding: 1.6rem 0;
  margin: 0 auto;

  > a {
    height: 3.2rem;

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  & > img {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 740px;
  }
`

export const HeaderContent = styled.div`
  width: 90%;

  position: relative;
  margin: 3.2rem auto;

  > strong {
    color: var(--color-title-in-primary);
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
  }

  > p {
    max-width: 30rem;

    color: var(--color-text-in-primary);
    font-size: 1.6rem;
    line-height: 2.6rem;

    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    max-width: 740px;

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding-bottom: 48px;
    margin: 0 auto;

    > strong {
      max-width: 350px;
    }
  }
`
