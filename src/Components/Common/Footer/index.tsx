import React from 'react';
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style._container}>
        <div className={style.footer__leftgroup}>
          <Link to="/" className={style.footer__logo}>
            ROBO.SCHOOL
          </Link>
          <p className={style.footer__copyright}>© ROBO.SCHOOL</p>
        </div>
        <div>
          <a href="tel:8000001122" className={style.footer__tel}>
            +7 800 000 11 22
          </a>
        </div>
      </div>
    </footer>
  );
};
