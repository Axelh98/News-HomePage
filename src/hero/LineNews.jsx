import React from "react";
import "./Hero.css";
import Retro from "../assets/image-retro-pcs.jpg";
import Laptops from "../assets/image-top-laptops.jpg";
import Gaming from "../assets/image-gaming-growth.jpg";

const LineNews = () => {
  return (
    <section className="LineNews"> 
      <div className="LineNews_card">
        <div>
          <img src={Retro} alt="" />
        </div>
        <div className="LineNews_text">
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="LineNews_card">
        <div>
          <img src={Laptops} alt="" />
        </div>
        <div className="LineNews_text">
          <h3>02</h3>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="LineNews_card">
        <div>
          <img src={Gaming} alt="" />
        </div>
        <div className="LineNews_text">
          <h3>03</h3>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>                        
    </section>  
  );        
};                  

export default LineNews;
