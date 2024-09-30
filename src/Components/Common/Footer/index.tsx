import React from 'react';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <a href="" className={style.footer__logo}>
          ROBO.SCHOOL
        </a>
        <p className={style.footer__copyright}>© ROBO.SCHOOL</p>
      </div>
      <div>
        <a href="tel:8000001122" className={style.footer__tel}>
          +7 800 000 11 22
        </a>
      </div>
    </footer>
  );
};
