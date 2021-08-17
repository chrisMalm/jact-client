import React from 'react';
import { useState } from 'react';
import classes from './Header.module.css';
import  {CgMenu} from 'react-icons/cg'
import {RiCloseLine} from 'react-icons/ri'

export const Header = () => {
  const [activeHamburger, setActiveHamburger] = useState(false)
  return (
    <div className={classes.fixedHeader}>
      <div className={classes.smallJactLogo}></div>
      {/* mobile view */}
      {!activeHamburger ?
      
      <div className={classes.wrapperHamburger}>

      <CgMenu className={classes.hamburger} size='40px' color='white' onClick={() => setActiveHamburger(!activeHamburger)} />
      </div>
      :
      <div className={classes.wrapperHamburger}>

      <RiCloseLine className={classes.hamburger} size='40px' color='white' onClick={() => setActiveHamburger(!activeHamburger)} />
      </div>
    }
      {activeHamburger && 
    <div className={classes.mobileLinks}>
    <a className={classes.mobileLink} href='#welcome'>WELCOME</a> 
    <a className={classes.mobileLink} href='#adventure'>MISSION & VISION</a>
    <a className={classes.mobileLink} href='#network'>JOIN THE NETWORK</a>
    <a className={classes.mobileLink} href='#prospect'>PROSPECT SESSION</a>
    <a className={classes.mobileLink} href='#lectures'>BOOK US</a>
    <a className={classes.mobileLink} href='#qAndA'>Q&A</a>
  </div>
   
    }
      
      {/* desktop view */}
      <div className={classes.links}>
        <a className={classes.link} href='#welcome'>WELCOME</a> 
        <a className={classes.link} href='#adventure'>MISSION & VISION</a>
        <a className={classes.link} href='#network'>JOIN THE NETWORK</a>
        <a className={classes.link} href='#prospect'>PROSPECT SESSION</a>
        <a className={classes.link} href='#lectures'>BOOK US</a>
        <a className={classes.link} href='#qAndA'>Q&A</a>
      </div>
    </div>
  );
};
