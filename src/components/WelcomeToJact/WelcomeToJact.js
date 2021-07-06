import React from 'react';
import classes from './WelcomeToJact.module.css';
export const WelcomeToJact = () => {
  return (
    <div id='welcome' className={classes.wrapperWelcome}>
      <div className={classes.welcomeImg}>
        {' '}
        <a href='http://placeholder.com'>
          <img src='https://via.placeholder.com/450' />
        </a>
      </div>
      <div className={classes.welcomeText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quis
        numquam reiciendis quaerat dolorum neque in vitae voluptatem, rem
        asperiores, sed eius quod praesentium vero quasi repellendus odio
        pariatur nam impedit fuga ad dicta optio. Ab adipisci aliquam numquam
        hic porro, et sed qui tenetur soluta beatae fugit explicabo. Amet
        ducimus harum tenetur repellat temporibus fugiat soluta earum. Nesciunt
        dolorem ex quas ad in dolorum iusto nemo repellat voluptas aperiam,
        culpa repudiandae ipsa cupiditate similique molestias tenetur nostrum.
        Quod numquam exercitationem minus itaque molestias expedita
        necessitatibus debitis eveniet nostrum. Magni quos voluptate commodi.
        Alias sunt officia impedit dolorem qui laborum fugiat odit eveniet
        itaque quas nemo doloremque sint, quaerat aspernatur dicta ad! Porro
        nisi tenetur enim ipsa? Id, quis numquam?
      </div>
    </div>
  );
};
