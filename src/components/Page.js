import React from 'react';
import './Page.css';

export const HeroSection = ({ children }) => (
  <section className="hero">
    <h2>{children}</h2>
  </section>
);

export const Main = ({ children }) => <main className="main">{children}</main>;

export const TextContentContainer = ({ title, children }) => (
  <div className="text-content-container">
    <h3>{title}</h3>
    <section className="text-content">{children}</section>
  </div>
);

const Page = ({ children }) => (
  <article>
    <div className="content">{children}</div>
  </article>
);

export default Page;
