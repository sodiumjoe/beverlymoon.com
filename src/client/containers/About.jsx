import React from 'react';
import Page from '../components/Page.jsx';

const About = () => (
  <Page headerImgSrc='/img/about3.jpg'>
    <div className='text-content-container'>
      <h3>Industrial&nbsp;Designer at&nbsp;Heart, Creative&nbsp;Director by&nbsp;Trade</h3>
      <div className='text-content'>
        <p className='lead'>I design products to enhance our everyday.</p>
        <p>I&rsquo;m inspired by people: their habits, their preferences, the ways in which they navigate life. I appreciate the simple things in life. And I&rsquo;m curious about the everyday objects that surround us and define our worlds.</p>
        <p>As a designer, I think about how these products can bring us closer together and make us smile. I believe thoughtfully designed products can make meaningful differences in our lives.</p>
        <p>I&rsquo;m a Creative Director of Product at <a href='http://cincodesign.com'>Cinco Design</a> in Portland, Oregon. I&rsquo;m responsible for directing creative initiatives and executing on Consumer Trends and Insights, Product Strategy, Product Concepts, and CMF Strategies.</p>
        <p>Some of my clients include: Nixon, Incase, Logitech, Native, Microsoft, Dell, Intel, Pebble, Zolo.</p>
      </div>
    </div>
  </Page>
);

export default About;
