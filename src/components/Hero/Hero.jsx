import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";

const Hero = () => {
   return (
      <section className="hero-wrapper">
         <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
               <div className="hero-title">
                  <div className="orange-circle" />
                  <motion.h1
                     initial={{ y: "2rem", opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{
                        duration: 4,
                        type: "spring",
                     }}
                  >
                     Discover
                     <br /> Most Suitable
                     <br /> Property
                  </motion.h1>
               </div>
               <div className="flexColStart hero-des">
                  <span className="secondaryText">Find a solution that suit your necessity</span>
                  <span className="secondaryText">
                     The most beautifuls property you'll find here
                  </span>
               </div>
               <div className="flexCenter searchBar">
                  <HiLocationMarker color="var(--blue)" size={25} />
                  <input type="text" name="search" id="search" placeholder="Search location..." />
                  <button className="button">Search</button>
               </div>
               <div className="flexCenter stats">
                  <div className="flexColCenter stat">
                     <span>
                        <CountUp start={88000} end={9000} duration={3} />
                        <span> +</span>
                     </span>
                     <span className="secondaryText">Premium Products</span>
                  </div>
                  <div className="flexColCenter stat">
                     <span>
                        <CountUp end={29} />
                        <span> +</span>
                     </span>
                     <span className="secondaryText">Award Winning</span>
                  </div>
                  <div className="flexColCenter stat">
                     <span>
                        <CountUp start={1950} end={2000} duration={4} />
                        <span> +</span>
                     </span>
                     <span className="secondaryText">Happy Customers</span>
                  </div>
               </div>
            </div>
            <div className="flexCenter hero-right">
               <motion.div
                  className="image-container"
                  initial={{
                     x: "4rem",
                     opacity: 0,
                  }}
                  animate={{
                     x: 0,
                     opacity: 1,
                  }}
                  transition={{
                     duration: 4,
                     type: "spring",
                  }}
               >
                  <img src="./hero-image.png" alt="hero image" />
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
