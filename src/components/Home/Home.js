import React from 'react';
import classes from './Home.module.css';

export const Home = () => {
  return (
    <div className={classes.wrapperHomeContainer}>
      {/* center Logo  */}
      <div className={classes.logoContainer}>
        <div className={classes.logo}></div>
      </div>
    </div>
  );
};
