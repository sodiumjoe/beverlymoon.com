import React from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink } from 'react-router-dom';
import Page, { Main, TextContentContainer } from '../components/Page';

const NotFound = () => (
  <Page>
    <TextContentContainer title="Sorry, didn't find anything here.">
      <Main>
        <ul className="nav-links not-found">
          {NAV_LINKS.map((link) => (
            <li key={link.title}>
              <NavLink to={link.href}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      </Main>
    </TextContentContainer>
  </Page>
);

export default NotFound;
