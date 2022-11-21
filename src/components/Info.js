import React from "react";
import '../App.css';
import InfoImageLeft from '../img/InfoImageLeft.png'
import InfoLogo from '../img/InfoLogo.png'

const Info = () => {
   return (
      <div className="info">
         <div className="infoContainer container">
            <div className="infoWrapper">
               <div className="infoImage">
                  <img src={InfoImageLeft} />
               </div>
               <div className="infoText">
                  <div className="infoTitle">
                     <h1>Добро пожаловать в Нур-Султан</h1>
                     <p><span>Нур-Султан</span> - столица независимого Казахстана. Это молодой, современный, комфортный и динамичный город в котором каждый человек почувствует гостеприимность и радушие столицы. </p>
                  </div>
                  <div className="infoAdvantages__wrapper">
                     <div className="infoAdvantages__item">
                        <h1 className="infoAdvantagesTitle">500+</h1>
                        <h2 className="infoAdvantagesSubtitle">достопримечательностей</h2>
                     </div>
                     <div className="infoAdvantages__item">
                        <h1 className="infoAdvantagesTitle">2435+</h1>
                        <h2 className="infoAdvantagesSubtitle">объектов питания</h2>
                     </div>
                     <div className="infoAdvantages__item">
                        <h1 className="infoAdvantagesTitle">2000+</h1>
                        <h2 className="infoAdvantagesSubtitle">доступных мероприятий</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="infoLogo">
               <img src={InfoLogo} />
            </div>
         </div>
      </div>
   );
};

export default Info