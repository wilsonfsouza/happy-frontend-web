import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container, ContentWrapper } from './styles';

import logoImg from '../../assets/images/Logo.svg';

const LandingPage: React.FunctionComponent = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Bring happiness to the world</h1>
          <p>Visit orphanages and change the day of many children.</p>
        </main>
        <div className="location">
          <strong>Redding</strong>
          <span>CA</span>
        </div>
        <a href='#'><FiArrowRight size={32} /></a>
      </ContentWrapper>
    </Container>
  );
}

export default LandingPage;
