import React from "react";
import '../App.css';

import arrow from '../icons/arrow-right.svg';
import ReasonsItem from "./ReasonsItem";

const Reasons = () => {
   const items = [
      {
         id: '1',
         image: require('../img/reasonsImage1.png'),
         title: 'Достопримечательности',
         description: 'Футуристический город посреди степи — левый берег, олицетворяющий техногенное будущее.'
      },
      {
         id: '2',
         image: require('../img/reasonsImage2.png'),
         title: 'Самый большой шатёр в мире',
         description: 'ТРЦ Хан Шатыр является первым и единственным лайфстайл-центром, который объединяет шопинг и развлечения мирового уровня под одной крышей.'
      },
      {
         id: '3',
         image: require('../img/reasonsImage3.png'),
         title: 'Уникальная архитектура',
         description: 'Самая молодая и динамично развивающаяся столица стран СНГ. Возможно, именно поэтому архитектура города столь необычна и поразительна.'
      },
      {
         id: '4',
         image: require('../img/reasonsImage4.png'),
         title: 'Гостеприимство',
         description: 'Если вы заблудились, местные никогда не откажут в помощи. Дружелюбие казахов не знает границ.'
      },
      {
         id: '5',
         image: require('../img/reasonsImage5.png'),
         title: 'Самая большая опера',
         description: 'Своим величием он поразил немало туристов, а внутри здание украшено еще лучше, чем снаружи.'
      },
      {
         id: '6',
         image: require('../img/reasonsImage6.png'),
         title: 'Люди',
         description: 'Несмотря на климат столицы, люди в городе очень добрые и всегда готовы прийти на помощь.'
      },
   ];

   return (
      <div className="reasons">
         <div className="reasonsContainer container">
            <div className="reasonsTitle">
               <div className="reasonsTitleText">
                  <h1>#Nur-Sultan</h1>
                  <h2>6 причин посетить город</h2>
               </div>
               <div className="reasonsMore">
                  <h3>Подробнее</h3>
                  <img src={arrow} />
               </div>
            </div>
            <div className="reasonsItem">
               {items.map((item, i) => {
                  return <ReasonsItem item={item} key={i} />;
               })}
            </div>
         </div>
      </div>
   );
};

export default Reasons