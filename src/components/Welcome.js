import React from "react";
import '../App.css';
import WelcomeTitle from '../img/WelcomeTitle.png';
import WelcomeWrapper from "./WelcomeWrapper";

const Welcome = () => {
   return (
      <div className="welcome">
         <div className="welcomeContainer container">
            <div className="welcomeTitle">
               <img
                  src={WelcomeTitle}
                  className="welcomeTitleImage"
               />
            </div>
            <div className="welcomeWrapperContainer">
               <WelcomeWrapper />
            </div>
         </div>
      </div>
   );
};

export default Welcome