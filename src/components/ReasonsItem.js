import React from "react";
import '../App.css';

const ReasonsItem = ({ item }) => {
   return (
      <div className="reasonsItemWrapper">
         <div className="reasonsItemImage"><img src={item.image} alt="" /></div>
         <div className="reasonsItemText">
            <h1 className="reasonsItemTitle">{item.title}</h1>
            <p className="reasonsItemDescription">{item.description}</p>
         </div>
      </div>
   );
};



export default ReasonsItem