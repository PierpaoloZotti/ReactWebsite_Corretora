import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
   return (
      <section className="c-wrapper">
         <div className="paddings innerWith flexCenter c-container">
            <div className="flexColStart c-left">
               <span className="orangeText">Our Contacts</span>
               <span className="primaryText">Is Easy To Contact Us</span>
               <span className="secondaryText">Lorem ipsum dolor sit amet consectetur.</span>
               <div className="flexColStart contactModes">
                  <div className="flexStart row">
                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <MdCall size={25} />
                           </div>
                           <div className="flexColStart detail">
                              <span>Call</span>
                              <span>+5521981302436</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                     </div>
                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <BsFillChatDotsFill size={25} />
                           </div>
                           <div className="flexColStart detail">
                              <span>Chat</span>
                              <span>+5521981302436</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                     </div>
                  </div>
                  <div className="flexStart row">
                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <HiChatBubbleBottomCenter size={25} />
                           </div>
                           <div className="flexColStart detail">
                              <span>Call</span>
                              <span>+5521981302436</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                     </div>
                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <MdCall size={25} />
                           </div>
                           <div className="flexColStart detail">
                              <span>Call</span>
                              <span>+5521981302436</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="c-right">
               <div className="image-container">
                  <img src="./contact.jpg" alt="contact image" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
