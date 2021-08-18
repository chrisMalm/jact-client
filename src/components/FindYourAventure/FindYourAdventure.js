import classes from './FindYourAdventure.module.css';
import React from 'react';
import coffeyCup from '../../assets/carousel3.jpg';


export const FindYourAdventure = () => {
  return (
    <div className={classes.wrapperAdventure}>
      <div className={classes.visionAndMissionImg}>
        {' '}
        <img src={coffeyCup} width="600" height="450 " alt=''/>

      </div>
      <div id='adventure' className={classes.adventureTextOne}>
        <span className={classes.titleVm}>Vision & Mission</span>
      "Vision to develop and be a help for the national and international market with support and guidance regarding players, leaders and unions as well as to be market leading and to power the development in a genre that doesn’t exist today.
Mission trough knowledge and competence we want and can affect today’s market in a positive way as well as also teach the same the need and the procedure which will work as guidelines and quality safe future transitions."

      </div>
    </div>
  );
};
