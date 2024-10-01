import { Footer } from 'Components/Common/Footer';
import { Header } from 'Components/Common/Header';
import { Payment } from 'Components/Payment';
import React from 'react';
import style from "./PaymentPage.module.scss"

export const PaymentPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
        <Payment />
      <Footer />
    </div>
  );
};
