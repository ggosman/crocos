import React from "react";
import '../App.css';

import WelcomeItem from "./WelcomeItem";

const WelcomeWrapper = () => {
   const items = [
      {
         id: '1',
         image: require('../img/WelcomeItemImage1.png'),
         title: 'Где остановиться?',
         description: 'Отели, хостелы...'
      },
      {
         id: '2',
         image: require('../img/WelcomeItemImage2.png'),
         title: 'Где поесть??',
         description: 'Рестораны, кафе...'
      },
      {
         id: '3',
         image: require('../img/WelcomeItemImage3.png'),
         title: 'Куда сходить?',
         description: 'Театры, кино...'
      },
      {
         id: '4',
         image: require('../img/WelcomeItemImage4.png'),
         title: 'Что посмотреть?',
         description: 'Музеи, байтерек...'
      },
   ];
   return (
      <div className="welcomeWrapper">
         {items.map((item, i) => {
            return <WelcomeItem item={item} key={i} />;
         })}
      </div>
   );
};

export default WelcomeWrapper;

