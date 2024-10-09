import React from "react";
import style from "./MainBlock.module.scss"

export const PageMainBlock=()=>{
    return(
    <section className={`${style.page__mainblock} ${style.mainblock}`}>
    <div className={`${style.mainblock__container} ${style._container}`}>
       <div className={style.mainblock__body}>
        <div className={style.mainblock__info}>
            <h1 className={style.mainblock__title}>ROBO SCHOOL</h1>
            <p className={style.mainblock__text}>Курсы повышения квалификации по робототехнике <br/> для педагогов начальной школы</p>
            <a href="" className={style.mainblock__button}>Записаться на курс</a>
        </div>
        <div className={style.mainblock__image}>
            <img src="./images/Main/Group 211.png" alt="main-banner"/>
        </div>
       </div> 
    </div>
</section>
)
}