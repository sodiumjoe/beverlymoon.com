import React from 'react';
import Figure from '../components/Figure';
import Page, { Main } from '../components/Page';
import { projects } from '../data';

const Portfolio = () => (
  <Page>
    <h2>Selected Works</h2>
    <Main>
      {projects.map(({ title, description, id, items }) => (
        <Figure
          key={id}
          title={title}
          description={description}
          link={`/portfolio/${id}`}
          src={id === 'hora' ? items[5].src : items[0].src}
        />
      ))}
    </Main>
  </Page>
);

export default Portfolio;
