import React from "react";
import '../App.css';
import Swiper from 'swiper';
import 'swiper/css';

const SliderItem = ({ item }) => {
   return (
      <div className="SliderItem">
         <div className="sliderItemImage"><img src={item.image} alt="" /></div>
         <div className="sliderItemText">
            <h1 className="sliderItemSubtitle">Отдых рядом с городом</h1>
            <h1 className="sliderItemTitle">{item.title}</h1>
            <p className="sliderItemDescription">{item.description}</p>
            <button>Подробнее</button>
         </div>
      </div>
   );
};



export default SliderItem