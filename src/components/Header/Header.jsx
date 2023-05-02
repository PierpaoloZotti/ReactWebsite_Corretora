import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "./Header.css";
/*
Per gestire i click esterni al pulsante uso questo modulo
L'utilizzo é semplice, basta fare un wrap del menu che deve essere
nascosto cliccando esternamente e con una fuzione alteriamo lo stato
del menu, da aperto a chiuso
*/
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
   const [menuOpened, setMenuOpened] = useState(false);
   const getMenuStyle = (menuOpened) => {
      if (document.documentElement.clientWidth <= 800) {
         return { right: !menuOpened && "-100%" };
      }
   };
   return (
      <section className="h-wrapper">
         <div className="paddings innerWidth flexCenter h-container">
            <img src="./logo.png" alt="logo" width={100} />
            <OutsideClickHandler
               onOutsideClick={() => {
                  setMenuOpened(false);
               }}
            >
               <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
                  <a href="">Residencies</a>
                  <a href="">Our Value</a>
                  <a href="">Contact Us</a>
                  <a href="">Get started</a>
                  <button className="button">
                     <a href="">Contact</a>
                  </button>
               </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
               <BiMenuAltRight size={30} />
            </div>
         </div>
      </section>
   );
};

export default Header;
