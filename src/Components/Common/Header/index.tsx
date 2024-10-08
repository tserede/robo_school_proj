import React from "react";
import style from "./Header.module.scss"
import { Link } from "react-router-dom";

export const Header=()=>{
    return(
        <header className={style.header}>
            <div className={`${style.header__container} ${style._container}`}>
                <Link to="/" className={style.header__logo}>ROBO.SCHOOL</Link>
                <div className={`${style.header__menu} ${style.menu}`}>
                    <nav className={style.menu__body}>
                            <ul className={style.menu__list}>
                                <li className={style.menu__item}><a href="" className={style.menu__link}>О школе</a></li>
                                <li className={style.menu__item}><a href="" className={style.menu__link}>Тренеры</a></li>
                                <li className={style.menu__item}><a href="" className={style.menu__link}>Стоимость</a></li>
                                <li className={style.menu__item}><Link to="/payment" className={style.menu__link}>Оплата</Link></li>
                            </ul>
                    </nav>
                    <div className={`${style.menu__icon} ${style.iconmenu}`}>
                        <img src="./images/Header/menu.png" alt="menu" />
                        <img src="./images/Header/menu_close.png" alt="menu_close" />
                    </div>
                </div>
            <div className={style.header__tel}>
                <a href="tel:8000001122" className={style.header__tel_1}>+7 800 000 11 22</a>
                <a href="tel:8000001122" className={style.header__tel_2}><img src="./images/Header/tel.png" alt="tel" /></a>
            </div>
            </div>
        </header>
    )
};