import React from "react";
import style from "./Payment.module.scss"

export const Payment =()=>{
    return(
        <section className={style.payment}>
            <div className={style.payment__container}>
            <h1 className={style.payment__title}>Оплата обучения</h1>
            <h4 className={style.payment__subtitle}>Для оплаты обучения необходимо:</h4>
            <ol className={style.payment__list}>
                <li className={style.payment__item}> Выберете пакет обучения</li>
                <li className={style.payment__item}> Оставьте заявку на обучение</li>
                <li className={style.payment__item}> Ожидайте звонка от менеджера</li>
                <li className={style.payment__item}> Ознакомьтесь с договором</li>
                <li className={style.payment__item}> Выберете предпочтительный способ оплаты</li>
            </ol>
            <h2 className={`${style.payment__title} ${style.payment__refund}`}>Возврат</h2>
            <p className={style.payment__refund_text}>Возврат средств в случаях предусмотренных договором — офертой производится на основе письменного заявления на ваш банковский счет в течение 5-30 рабочих дней (срок зависит от Банка, который выдал вашу банковскую карту).</p>
            </div>
        </section>
    )
}