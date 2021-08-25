import React from 'react';
import classes from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={classes.wrapperFooter}>
			<div className={classes.footer}>
				<div className={classes.contact}>
					<a href='mailto:info@jact.eu'>
						<i className={`far fa-envelope ${classes.icons}`}></i>
					</a>
				</div>
				{/* <div className={classes.contact}>
          <a href='tel: +46735177331'>
            {' '}
            <i className={`fas fa-phone  ${classes.icons}`}></i>
          </a>
        </div> */}
				<div className={classes.contact}>
					<a
						href='https://www.instagram.com/jact.eu/?hl=sv'
						target='_blank'
						rel='noreferrer'>
						<i className={`fab fa-instagram ${classes.icons}`}></i>
					</a>
				</div>
				<div className={classes.contact}>
					<a
						href='https://sv-se.facebook.com/jact.eu/'
						target='_blank'
						rel='noreferrer'>
						<i className={`fab fa-facebook  ${classes.icons}`}></i>
					</a>
				</div>
			</div>
		</div>
	);
};
