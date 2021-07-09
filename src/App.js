import React from 'react';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JactCarousel } from './components/JactCarousel/JactCarousel';
import { Header } from './components/Header/Header';
import { BookUsForLectures } from './components/BookUsForLectures/BookUsForLectures';
import { JoinTheNetwork } from './components/JoinTheNetwork/JoinTheNetwork';
import { JactProspectSessions } from './components/JactProspectSessions/JactProspectSessions';
import { FindYourAdventure } from './components/FindYourAventure/FindYourAdventure';
import { WelcomeToJact } from './components/WelcomeToJact/WelcomeToJact';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { RollingInstagram } from './components/RollingInstagram/RollingInstagram';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
export const App = () => {
  return (
    <div className={classes.appContainer}>
      <Header />
      <ScrollToTop />
      <JactCarousel />
      {/* <Home /> */}
      <RollingInstagram />
      <WelcomeToJact />
      <JoinTheNetwork />
      <FindYourAdventure />
      <JactProspectSessions />
      <BookUsForLectures />
      <Footer />
    </div>
  );
};
