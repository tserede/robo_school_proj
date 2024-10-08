import React, { useState } from 'react';
import style from './Page_whatyouget.module.scss';

export const PageWhatyouget = () => {
  const [explanation, setExplanation] = useState(false);
  const handleMouseEnter = () => {
    setExplanation(true);
  };
  const handleMouseLeave = () => {
    setExplanation(false);
  };
  return (
    <section className={`${style.page__pagewhatyouget} ${style.whatyouget}`}>
      <div className="_container">
        <h2 className={style.whatyouget__title}>Что вы получите после курса</h2>
        <div className={style.whatyouget__colomns}>
          <div className={style.whatyouget__colomn}>
            <div className={style.whatyouget__item}>
              <div>
                <h4 className={style.whatyouget__columntitle}>Удостоверение</h4>
              </div>
              <p className={style.whatyouget__text}>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
            </div>
          </div>
          <div className={style.whatyouget__colomn}>
            <div className={style.whatyouget__item}>
              <div>
                <h4 className={style.whatyouget__columntitle}>Знания</h4>
              </div>
              <p className={style.whatyouget__text}>По основам разработки учебно-методических комплексов по робототехнике и программированию</p>
            </div>
          </div>
          <div className={style.whatyouget__colomn}>
            <div className={style.whatyouget__item}>
              <div className={style.whatyouget__practice}>
                <h4 className={`${style.whatyouget__columntitle} ${style.whatyouget__columntitle_info}`}>
                  Практику
                </h4>
                <div className={style.whatyouget__info}>
                  <img tabIndex={0} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} src="./images/Main/info.png" alt="info" />
                </div>
                {explanation && <div className={style.whatyouget__explanation}>При наличии свободных мест</div>}
              </div>
              <p className={style.whatyouget__text}>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
