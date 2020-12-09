import React from 'react';
import Figure from '../components/Figure';
import Page, { HeroSection, Main } from '../components/Page';

const Home = () => (
  <Page>
    <HeroSection>
      Designing digital experiences and creative strategies for progressive
      brands.
    </HeroSection>
    <Main>
      <Figure
        link="/about"
        src="/img/Photo.jpg"
        title="About"
        description="A quick snapshot"
      />
      <Figure
        link="/portfolio"
        src="/img/PORTFOLIO_HERO.jpg"
        title="Portfolio"
        description="A collection of my favorites"
      />
    </Main>
  </Page>
);

export default Home;
