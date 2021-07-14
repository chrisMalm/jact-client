import classes from './Gdpr.module.css';
import React from 'react';

export const Gdpr = (props) => {
  return (
    <div className={classes.wrapperGdpr}>
      <div className={classes.cross} onClick={() => props.setGdpr(!props.gdpr)}>
        X
      </div>
      <div className={classes.gdpr}>
        This site uses cookies By proceeding, you are agreeing to our Privacy
        Policy, including the use of cookies and other tracking technologies.
      </div>
    </div>
  );
};
