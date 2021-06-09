import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import io from 'socket.io-client';

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
      <div>
        {tweets &&
          tweets.map((tweet) => {
            return <div key={tweet.id}>{tweet.text}</div>;
          })}
      </div>
    </>
  );
};
