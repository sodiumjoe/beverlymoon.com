import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <section className="contact">
      <p>
        Copyright &copy; 2020 &bull; Beverly Moon &bull;{' '}
        <a title="email" href="mailto:beverly.moon@gmail.com">
          beverly.moon@gmail.com
        </a>
      </p>
      <span>
        <address>Portland, Oregon</address>
      </span>
    </section>
  </footer>
);

export default Footer;
