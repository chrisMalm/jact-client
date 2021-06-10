import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './RollingInstagram.module.css';

export const RollingInstagram = () => {
  const twitterAPI = 'http://localhost:4000/';
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
    <>
      {/* <div class="ticker-wrap">
<div class="ticker">
  <div class="item">Letterpress chambray brunch.</div>
  <div class="item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
  <div class="item">Ugh PBR&B kale chips Echo Park.</div>
  <div class="item">Gluten-free mumblecore chambray mixtape food truck. </div>
  <div class="item">Authentic bitters seitan pug single-origin coffee whatever.</div>
  </div>
  </div> */}
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
    </>
  );
};
