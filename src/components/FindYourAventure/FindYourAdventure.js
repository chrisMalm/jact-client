import classes from './FindYourAdventure.module.css';
import React from 'react';
import coffeyCup from '../../assets/carousel3.jpg';

export const FindYourAdventure = () => {
	return (
		<div className={classes.wrapperVisionAndMission}>
			<div className={classes.visionAndMissionImg}>
				{' '}
				<img src={coffeyCup} alt='' />
			</div>
			<div id='adventure' className={classes.visionAndMissionText}>
				<span className={classes.titleVm}>Vision & Mission</span>
				<div>
					<b>Vision to develop&nbsp;</b>
					and be a help for the national and international market with support
					and guidance regarding players, leaders and unions as well as to be
					market leading and to power the development in a genre that doesn’t
					exist today.<br></br>
					<b>Mission trough&nbsp;</b>
					knowledge and competence we want and can affect today’s market in a
					positive way as well as also teach the same the need and the procedure
					which will work as guidelines and quality safe future transitions.
				</div>
			</div>
		</div>
	);
};
