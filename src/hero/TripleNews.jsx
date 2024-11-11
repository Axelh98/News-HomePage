import React from 'react';
import './Hero.css';

const TripleNews = () => {
  return (
    <section className="TripleNews">
      <div>
          <h1>New</h1>
      </div>
      <div>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>    
          <h3>The Downsides of AI artistry</h3>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
          
      </div>
      <div>            
          <h3>Is VC Funding Drying Up?</h3>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          
      </div>  
    </section>
  );
};                    

export default TripleNews;