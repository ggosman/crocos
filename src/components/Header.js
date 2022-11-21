import React from "react";
import '../App.css';

import HeaderLogo from '../icons/HeaderLogo.svg';
import inst from '../icons/inst.svg';
import yt from '../icons/yt.svg';
import fb from '../icons/fb.svg';
import search from '../icons/search.svg';
import ArrowDown from '../icons/ArrowDown.svg';
import Cart from '../icons/Cart.svg';

const Header = () => {
   return (
      <div className="header">
         <div className="headerContainer container">
            <div className="headerWrapper">
               <div className="headerLogo">
                  <img src={HeaderLogo} />
               </div>
               <div className="headerNav">
                  <ul className="headerMenu">
                     <li className="headerMenuItem headerMenuItemActive"><a href="#">Tourism</a></li>
                     <li className="headerMenuItem"><a href="#">Invest</a></li>
                     <li className="headerMenuItem"><a href="#">Convention bureau</a></li>
                  </ul>
               </div>
               <div className="headerSocial">
                  <img src={inst} />
                  <img src={yt} />
                  <img src={fb} />
               </div>
               <div className="headerSearch">
                  <img src={search} />
               </div>
               <div className="headerBurger">
                  <button>
                     <span></span>
                  </button>
               </div>
               <div className="headerLanguage">
                  <h1>RU</h1>
                  <img src={ArrowDown} />
               </div>
               <div className="headerCart">
                  <div className="headerCartImage">
                     <img src={Cart} />
                  </div>
                  <div className="headerCartText">
                     <h1>КОРЗИНА</h1>
                     <h3>0 ТГ.</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header