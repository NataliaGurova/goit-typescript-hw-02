import css from './LoadMoreBtn.module.css';
import React, { FC } from "react"
// import * as React from 'react';

interface LoadMoreBtnProps {
  children: React.ReactNode
  // children: React.ReactElement;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick, children }) => {
  // console.log(onClick);
  
  return (
    <button className={css.btn} onClick={onClick} type="button">
      {children}
    </button>
  );
};
