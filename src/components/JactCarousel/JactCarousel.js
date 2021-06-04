import React from 'react';
import classes from './JactCarousel.module.css';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/cropped1slide.jpg';
import slide2 from '../../assets/carousel2.jpg';
import slide3 from '../../assets/carousel3.jpg';
import slide4 from '../../assets/carousel4.jpg';
import slide5 from '../../assets/carousel5.jpg';

export const JactCarousel = () => {
  return (
    <div className={classes.wrapperCarousel}>
      <Carousel prevIcon='' nextIcon='' indicators={false}>
        <Carousel.Item interval={3000} id={classes.item}>
          <img className={classes.imgOne} src={slide1} alt='first slide' />
          <Carousel.Caption id={classes.test}>
            <a href='#welcome'>Welcome To JACT</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={classes.img} src={slide2} alt='second slide' />

          <Carousel.Caption>
            <a href='#network'>Join The Network</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={classes.img} src={slide3} alt='third slide' />

          <Carousel.Caption>
            <a href='#adventure'>Find Your Adventure</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={classes.img} src={slide4} alt='fourth slide' />

          <Carousel.Caption>
            <a href='#prospect'>JACT Prospect Sessions</a>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className={classes.img} src={slide5} alt='fifth slide' />

          <Carousel.Caption>
            <a href='#lectures'>Book Us For Lectures</a>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
