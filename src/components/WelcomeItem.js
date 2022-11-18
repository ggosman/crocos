import React from "react";
import '../App.css';

const WelcomeItem = ({ item }) => {
   return (
      <div>
         <div className="welcomeItemImage"><img src={item.image} alt="" /></div>
         <div className="welcomeItemText">
            <h1 className="welcomeItemTitle">{item.title}</h1>
            <p className="welcomeItemDescription">{item.description}</p>
         </div>
      </div>
   );
};



export default WelcomeItem