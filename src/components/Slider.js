import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';

import SliderItem from './SliderItem.js'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import icon1 from '../icons/sliderIcon1.png';
import icon2 from '../icons/sliderIcon2.png';
import icon3 from '../icons/slidericon3.png';
import icon4 from '../icons/sliderIcon4.png';
import icon5 from '../icons/sliderIcon5.png';
import icon6 from '../icons/sliderIcon6.png';
import icon7 from '../icons/sliderIcon7.png';

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
         description: 'Зеренда – это край волшебных лесов, живописных ущелий, скал, каньонов и родников, притягивающий к себе внимание самых заядлых туристов.1'
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
   ]

   const icons = [
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon7
   ]

   return (
      <Swiper
         modules={[EffectFade, Pagination, Autoplay]}
         effect="fade"
         slidesPerView={1}
         speed={800}
         autoplay={{
            delay: 5000,
         }}
         showsPagination={false}
         pagination={{
            clickable: true,
            renderBullet: (index, className) => {
               return '<div class="swiper-pagination-bullet">' + "<img src=" + icons[index] + "></div>";
            }
         }}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
      >
         {items.map((item, i) => {
            return <SwiperSlide><SliderItem item={item} key={i} /></SwiperSlide>;
         })}
      </Swiper>
   );
};

export default Slider