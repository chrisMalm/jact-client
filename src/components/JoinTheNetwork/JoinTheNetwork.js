import classes from './JoinTheNetwork.module.css';
import React from 'react';

export const JoinTheNetwork = () => {
  return (
    <div id='network' className={classes.wrapperTheNetwork}>
      <div className={classes.networkText}>
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
      <div className={classes.networkImg}>
        {' '}
        <a href='http://placeholder.com'>
          <img src='https://via.placeholder.com/450x150' />
        </a>
        <div className={classes.wrapperNetworkImg}>
          <div className={classes.networkImgOne}>
            {' '}
            <a href='http://placeholder.com'>
              <img src='https://via.placeholder.com/150x150' />
            </a>
          </div>
          <div className={classes.networkImgTwo}>
            {' '}
            <a href='http://placeholder.com'>
              <img src='https://via.placeholder.com/150x150' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
