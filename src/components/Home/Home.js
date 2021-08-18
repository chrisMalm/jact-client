import React from 'react';
import classes from './Home.module.css';

export const Home = (props) => {
  const activeDd = props.activeHamburger
  return (
    <div className={classes.wrapperHomeContainer}>
      {/* center Logo  */}
      {!activeDd ? <div className={classes.logoContainer}>
         <div className={classes.logo}></div> 
      </div> : null}
      
    </div>
  );
};
