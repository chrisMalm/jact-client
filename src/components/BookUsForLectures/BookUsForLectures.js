import classes from './BookUsForLectures.module.css';
import React from 'react';
import frontOfKids from '../../assets/carousel5.jpg';

export const BookUsForLectures = () => {
	return (
		<div id='lectures' className={classes.wrapperBookUs}>
			<div className={classes.wrapperInfo}>
				<div className={classes.bookUsImg}>
					{' '}
					<img src={frontOfKids} alt='' />
				</div>
				<div className={classes.bookUsText}>
					<span className={classes.titleBookUs}>Book Us For Lecture</span>
					<div>
						<b>After getting emails&nbsp;</b>
						from different people from clubs and Floorball schools asking us if
						we could come to them and have lectures about what we do and how we
						do it, we think it’s great signals that we doing things right.
						<br></br>
						<b>So we have now&nbsp;</b> a sculptured presentation for the ones
						who needs/wants us to give them a behind the scenes picture of a
						negotiation and also when we do the matchmaking between different
						clubs and players.<br></br>
						<b>We believe&nbsp;</b>
						that the more people we can reach out to and give the 360 angel and
						perspective of the complexity with a contract, transfer and the
						things you need to do to make everybody happy - the more we help our
						sport to reach the place we want to come to.<br></br>
						<b>So are you&nbsp;</b>
						as a club or a school interesting in this string in JACT, just email
						us and we can talk about making it happen!
					</div>
				</div>
			</div>
		</div>
	);
};
