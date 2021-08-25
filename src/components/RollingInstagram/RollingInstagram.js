import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './RollingInstagram.module.css';

export const RollingInstagram = () => {
	// const twitterAPI = 'http://localhost:4000/';
	const twitterAPI =
		'https://jact-management-server-39ajw91gn-malmgrenchristoffer-hotmailcom.vercel.app/';

	const [tweets, setTweets] = useState();

	useEffect(() => {
		axios
			.post(twitterAPI, { headers: { 'Content-Type': 'application/json' } })
			.then((res) => {
				setTweets(res.data[0].data);
			})
			.catch((err) => {
				console.log(err, 'error');
			});
	}, []);

	return (
		<div className={classes.wrapperTwitterFeed}>
			<div className={classes.twitterFeed}>
				{tweets &&
					tweets.map((tweet) => {
						return (
							<div className={classes.twitterFeedItem} key={tweet.id}>
								{tweet.text}
							</div>
						);
					})}
			</div>
		</div>
	);
};
