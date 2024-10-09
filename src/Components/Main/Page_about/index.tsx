import React from 'react';
import style from './Page_about.module.scss';

export const PageAbout = () => {
  return (
    <section className={`${style.page__pageabout} ${style.pageabout}`}>
      <div className={`${style.pageabout__container} _container`}>
        <p className={style.pageabout__about}><span>Robo School</span> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</p>
        <div className={style.pageabout__columns}>
          <div className={style.pageabout__columns_item}>
            <p className={style.item__quantity}>10</p>
            <p className={style.item__text}>УМК по различным направлениям по робототехнике</p>
          </div>
          <div className={style.pageabout__columns_item}>
            <p className={style.item__quantity}>20</p>
            <p className={style.item__text}>Школ, в которых запущена робототехника</p>
          </div>
          <div className={style.pageabout__columns_item}>
            <p className={style.item__quantity}>100</p>
            <p className={style.item__text}>Педагогов прошедших курсы повышения квалификации</p>
          </div>
          <div className={style.pageabout__columns_item}>
            <p className={style.item__quantity}>10000</p>
            <p className={style.item__text}>Обученных детей на базе собственных центров</p>
          </div>
        </div>
      </div>
    </section>
  );
};
