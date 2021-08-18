import React from 'react';
import classes from './WelcomeToJact.module.css';
import slide1 from '../../assets/carousel1.jpg';

export const WelcomeToJact = () => {
  return (
    <div id='welcome' className={classes.wrapperWelcome}>
      <div className={classes.welcomeImg}>
        {' '}
        
          <img src={slide1} width="600" height="450 " alt=''/>
        
      </div>
      <div className={classes.welcomeText}>
       <span className={classes.tilteWelcome}>Welcome to JACT</span>
      "JACT Management is here to help players, coaches and clubs regarding negotiations as well as guidance at transfers both nationally and internationally.
We take the dialog between player and club from the first conversation and contact to the finished deal.
Scouting our crew will also be at help for clubs who search for players and handle the contact when the clubs are on the hunt for a certain player type. We are then the link between both club and player"

      </div>
    </div> 
    
  );
};
