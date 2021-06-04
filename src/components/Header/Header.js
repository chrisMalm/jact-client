import React from 'react';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <div className={classes.fixedHeader}>
      <div className={classes.smallJactLogo}></div>
    </div>
  );
};
