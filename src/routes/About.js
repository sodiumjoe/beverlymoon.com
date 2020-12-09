import React from 'react';
import Page, { TextContentContainer } from '../components/Page';

const About = () => (
  <Page>
    <TextContentContainer
      title={
        <span>
          Creative&nbsp;designer at&nbsp;heart, future&nbsp;insights
          by&nbsp;trade
        </span>
      }
    >
      <p className="lead">I design products to enhance our everyday.</p>
      <p>
        Based in Portland, Oregon, I design products that enhance experiences
        for people. I enjoy exploring how new technology can inform everyday
        human behavior and relationships.
      </p>
      <p>
        Currently, I&apos;m a Sr. Digital Innovation Specialist, specializing in
        Design Insights at adidas.
      </p>
      <p>
        My side passion is to make contemporary objects that refine the mundane
        and bring us closer together. I&rsquo;m inspired by people: their
        habits, their preferences, the ways in which they navigate life. I
        appreciate the simple things in life. And I&rsquo;m curious about the
        everyday objects that surround us and define our worlds.
      </p>
    </TextContentContainer>
  </Page>
);

export default About;
