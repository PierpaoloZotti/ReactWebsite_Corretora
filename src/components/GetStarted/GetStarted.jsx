import "./GetStarted.css";
import React from "react";

const GetStarted = () => {
   return (
      <section className="g-wrapper">
         <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
               <span className="primaryText">Get Started With Zeta</span>
               <span className="secondaryText">Subscribe For More Exclusive Offers</span>
               <button className="button">
                  <a href="mailto:zeta.designer.rj@gmail.com.br">Get Started</a>
               </button>
            </div>
         </div>
      </section>
   );
};

export default GetStarted;
