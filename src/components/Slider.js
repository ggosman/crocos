import React from "react";
import '../App.css';

import SliderItem from "./SliderItem";

import Swiper, { Pagination } from 'swiper';
import 'swiper/css';

const Slider = () => {
   const items = [
      {
         id: '1',
         image: 'https://visitastana.kz/upload/iblock/80e/8yop7o2tt1jnu4msl5ihtwbwkxomfcr7.jpg',
         title: 'Бурабай',
         description: 'Настоящий оазис посреди казахской степи.'
      },
      {
         id: '2',
         image: 'https://visitastana.kz/upload/iblock/2f2/jl3mev2a2iij0va32t2ni15xjmduzzp7.jpg',
         title: 'Зеренда',
         description: 'Зеренда – это край волшебных лесов, живописных ущелий, скал, каньонов и родников, притягивающий к себе внимание самых заядлых туристов.'
      },
      {
         id: '3',
         image: 'https://visitastana.kz/upload/iblock/1e5/e0vgvtveqw08e3n0o0ulpg9a2y97qr98.jpg',
         title: 'Каркаралы',
         description: 'Каркаралы – уникальный регион со своими архитектурными особенностями и богатой историей.'
      },
      {
         id: '4',
         image: 'https://visitastana.kz/upload/iblock/788/1fhxmyylrs5k8faqd7cm2k7v9r4qyzmz.jpg',
         title: 'Соколиные горы',
         description: 'Соколиные горы расположены в Ерейментауском районе, среди гранитных скал и леса.'
      },
      {
         id: '5',
         image: 'https://visitastana.kz/upload/iblock/daf/6layleboqgnzvetcbi9502zopuf8nfm5.jpg',
         title: 'Селетинские каньоны',
         description: 'Селетинские каньоны- это каньоны Бестобе.'
      },
      {
         id: '6',
         image: 'https://visitastana.kz/upload/iblock/c0f/3dm76q6c1jopx6vqypuo7loewbai09f6.jpg',
         title: 'Коргалжынский заповедник',
         description: 'Коргалжынский государственный природный заповедник называют «жемчужиной края».'
      },
      {
         id: '7',
         image: 'https://visitastana.kz/upload/iblock/9f1/aog7hcvv09kajwt6ms14oplckqg6k7bc.jpg',
         title: 'Курортная зона «Имантау-Шалкар»',
         description: 'В Северо-Казахстанской области есть своя природная жемчужина.'
      },
   ];

   const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
   });

   return (
      <div className="slider">
         <div className="sliderContainer">
            <div className="sliderWrapper">
               <div class="swiper">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide">
                        {items.map((item, i) => {
                           return <SliderItem item={item} key={i} />;
                        })}
                     </div>
                  </div>
                  <div class="swiper-pagination"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Slider