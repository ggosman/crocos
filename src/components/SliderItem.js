import React from "react";
import '../App.css';

const SliderItem = ({ item }) => {
   return (
      <div className="swiper-slide">
         <div className="SliderItem">
            <div className="sliderItemImage"><img src={item.image} /></div>
            <div className="sliderItemTextWrapper">
               <div className="sliderItemText">
                  <h1 className="sliderItemSubtitle">Отдых рядом с городом</h1>
                  <h1 className="sliderItemTitle">{item.title}</h1>
                  <p className="sliderItemDescription">{item.description}</p>
                  <button className="sliderItemButton">Подробнее</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SliderItem