import styled from 'styled-components';
import landingImg from '../../assets/images/landing.svg';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--liner-gradient-blue);

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display:flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 80% center;

  img {

  }

  main {
    max-width: 350px;

    h1 {
      font-size: 3.7rem;
    }
    p {
      margin-top: 2.22rem;
      font-size: 1.33rem;
      line-height: 1.88rem;
    }
  }

  .location {
    position: absolute;
    right:0;
    top:0;

    font-size: 1.33rem;
    line-height: 1.88rem;

    display: flex;
    flex-direction: column;
    text-align: right;
  }

  a {
    position: absolute;
    right:0;
    bottom:0;

    width: 80px;
    height: 80px;
    color: var(--color-texts-button);
    background: var(--color-secondary);
    border-radius: 1.7rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      color: var(--color-white);
      background: var(--color-primary-hover);
    }
  }
`;
