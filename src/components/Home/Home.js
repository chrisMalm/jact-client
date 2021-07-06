import React from 'react';
import classes from './Home.module.css';

export const Home = () => {
  return (
    <div className={classes.wrapperHomeContainer}>
      {/* center Logo  */}
      <div className={classes.logoContainer}>
        <div className={classes.logo}></div>
      </div>
      {/* <div className='wrapperFooter'>
        <div className='footer'>
          <div className='contact'>
            <a href='mailto:info@jact.eu'>
              <i className='far fa-envelope icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a href='tel: +46735177331'>
              {' '}
              <i class='fas fa-phone icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a
              href='https://www.instagram.com/jact.eu/?hl=sv'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-instagram icons'></i>
            </a>
          </div>
          <div className='contact'>
            <a
              href='https://sv-se.facebook.com/jact.eu/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-facebook icons'></i>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
