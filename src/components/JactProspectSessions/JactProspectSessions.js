import classes from './JactProspectSessions.module.css';
import React from 'react';

export const JactProspectSessions = () => {
  return (
    <div id='prospect' className={classes.wrapperProspect}>
      <div className={classes.prospectLeft}>
        <a href='http://placeholder.com'>
          <img src='https://via.placeholder.com/250x175' alt='' />
        </a>
        <div className={classes.textLeft}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          ipsam tempora dolore doloremque dolor voluptates aut consectetur,
          rerum repellat quia? Ut, quas. Sequi itaque facere excepturi vitae
          minima vel nostrum eos quis cumque minus.
        </div>
      </div>
      <div className={classes.prospectCenter}>
        <a href='http://placeholder.com'>
          <img src='https://via.placeholder.com/250x175' alt='' />
        </a>
        <div className={classes.textCenter}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          earum omnis libero debitis adipisci vel perspiciatis delectus ad
          eveniet odit, mollitia voluptatum, architecto quibusdam deleniti
          fugiat aliquam porro facilis distinctio unde, nam nobis id? Omnis?
        </div>
      </div>
      <div className={classes.prospectRight}>
        <a href='http://placeholder.com'>
          <img src='https://via.placeholder.com/250x175' alt='' />
        </a>
        <div className={classes.textRight}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quasi
          debitis ex alias doloribus recusandae nihil optio sed culpa, assumenda
          aspernatur esse reprehenderit tenetur? Recusandae, accusantium atque
          distinctio nesciunt natus impedit aliquam eveniet odit obcaecati.
        </div>
      </div>
    </div>
  );
};
