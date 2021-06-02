import React from 'react';
import classes from './App.module.css';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <div className={classes.appContainer}>
      <Header />
    </div>
  );
};
