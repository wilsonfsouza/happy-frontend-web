import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container, ContentWrapper } from './styles';

import logoImg from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const LandingPage: React.FunctionComponent = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Bring happiness to the world</h1>
          <p>Get involved with local facilities and change the day of many of our seniors.</p>
        </main>
        <div className="location">
          <strong>Redding</strong>
          <span>CA</span>
        </div>
        <Link to='/app'><FiArrowRight size={32} /></Link>
      </ContentWrapper>
    </Container>
  );
}

export default LandingPage;
