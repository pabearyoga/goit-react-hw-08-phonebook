import React from 'react';
import css from './Book.module.css';

export const Book = () => {
  return (
    <div className={css.book}>
      <div className={css.book__pgShadow}></div>
      <div className={css.book__pg}></div>
      <div className={`${css.book__pg} ${css.book__pg2}`}></div>
      <div className={`${css.book__pg} ${css.book__pg3}`}></div>
      <div className={`${css.book__pg} ${css.book__pg4}`}></div>
      <div className={`${css.book__pg} ${css.book__pg5}`}></div>
    </div>
  );
};
