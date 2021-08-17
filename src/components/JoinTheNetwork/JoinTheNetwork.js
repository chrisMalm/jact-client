import classes from './JoinTheNetwork.module.css';
import React from 'react';
import shoeStore from '../../assets/carousel2.jpg';

export const JoinTheNetwork = () => {
  return (
    <div id='network' className={classes.wrapperTheNetwork}>
          <div className={classes.networkImg}>
        {' '}
        <img src={shoeStore} width="600" height="450" alt=''/>
        
      </div>
      <div className={classes.networkText}>
       
"Experience inside our walls there is experiences from players, leaders and the role as deciding over elite clubs, both nationally and internationally. We come from working in the elite stage from the highest ranked leagues in the floorballworld, as well as international championships.
When you sign to be a member of JACT you get to be a part in the biggest network in the sport today. We are in contact with future possibilities on a daily basis."

      </div>
  
    </div>
  );
};
