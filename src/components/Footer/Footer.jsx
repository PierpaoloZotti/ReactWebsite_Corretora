import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <section className="f-wrapper">
         <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
               <img src="./logo2.png" alt="logo image" />
               <span className="secondaryText">
                  Our vision is focused <br />
                  on your happiness
               </span>
            </div>
            <div className="flexColStart f-right">
               <span className="primaryText">Information</span>
               <span className="secondaryText">Ilha de Guaratiba - Rio de Janeiro - BR</span>
               <div className="flexCenter links">
                  <a href="">Property</a>
                  <a href="">Service</a>
                  <a href="">Product</a>
                  <a href="">About US</a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
