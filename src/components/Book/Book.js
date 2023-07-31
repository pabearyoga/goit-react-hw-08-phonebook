import React from 'react';
import css from './Book.module.css';

export const Book = () => {
  return (
    <div className={css.book}>
      <div className={css.book__pgShadow}></div>
      <div className={css.book__pg}></div>
      <div
        // class="book__pg book__pg--2"
        className={`${css.book__pg} ${css.book__pg2}`}
      ></div>
      <div
        // class="book__pg book__pg--3"
        className={`${css.book__pg} ${css.book__pg3}`}
      ></div>
      <div
        // class="book__pg book__pg--4"
        className={`${css.book__pg} ${css.book__pg4}`}
      ></div>
      <div
        // class="book__pg book__pg--5"
        className={`${css.book__pg} ${css.book__pg5}`}
        // className={`${css.wrapper} ${css.animate__animated} ${css.animate__bounceInUp}`}
      ></div>
    </div>
  );
};
