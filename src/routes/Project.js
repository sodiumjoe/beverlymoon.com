import React from 'react';
import Figure from '../components/Figure';
import NotFound from './NotFound';
import { projectsById } from '../data';
import Page, { Main, TextContentContainer } from '../components/Page';

const Project = ({ match }) => {
  const project = projectsById[match.params.id];
  if (!project) {
    return <NotFound />;
  }
  const { title, items, lead, content } = project;
  return (
    <Page>
      <TextContentContainer title={title}>
        <p className="lead">{lead}</p>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </TextContentContainer>
      <Main>
        {items.map((item) => (
          <Figure key={item.src} {...item} />
        ))}
      </Main>
    </Page>
  );
};

export default Project;
