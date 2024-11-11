import React from 'react';
import './Hero.css';
import TripleNews from './TripleNews';
import LineNews from './LineNews';
import main_image from '../assets/image-web-3-desktop.jpg';

const Hero = () => {
  return (
    <div className="Hero">
      <section className='main_image'>
        <img src={main_image} alt='web3 image' />
      </section>
      <TripleNews />
      <section className='new_1'>
        <h3>The Bright Future of Web 3.0?</h3>
      </section>
      <section className='new_2'>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button>Read More</button>
      </section>
      <LineNews />
    </div>
  );
};

export default Hero;