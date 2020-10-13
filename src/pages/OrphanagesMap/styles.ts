import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;


  display: flex;
  position: relative;

  .leaflet-container {
    z-index: 5;
  }

  .create-orphanage{
    position: absolute;
    right: 2.22rem;
    bottom: 2.22rem;
    z-index: 10;

    color: var(--color-white);
    background: var(--color-primary);
    border-radius: 1.11rem;

    width: 3.55rem;
    height: 3.55rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover{
      background-color: var(--color-primary-hover);
    }
  }
`;

export const AsideContainer = styled.aside`
  width: 440px;
  background: var(--liner-gradient-blue);
  padding: 4.44rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    h2 {
      font-size: 2.22rem;
      line-height: 2.33rem;
      margin-top: 3.55rem;
    }

    p {
      margin-top: 1.33rem;
      line-height: 1.55rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items:flex-start;
  }
`;
