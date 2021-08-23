import React from 'react';
import classes from './QandA.module.css'
import {BsQuestionCircleFill} from 'react-icons/bs'

export const QandA = () => {
    return (
        <div id='qAndA' className={classes.wrapperQandA}>
          <div className={classes.qanda}>Q&A</div>
          <div className={classes.qAndAText}>
            <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
           <div className={classes.wrapperQuestion}>
             <span className={classes.paragraph}>
            Is it for both boys and female player?
            </span>
            Yes of course, we work with both genders who wants and need our help.</div>
          </div>
          <div className={classes.qAndAText}>
            <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
            <div className={classes.wrapperQuestion}>
              <span className={classes.paragraph}>Do I have to pay, and when?</span>
              No, not in the beginning. First of all you sign up to our database so we know that you exist. You only pay when the transfer or new contract is done.
            </div>
          </div>
          <div className={classes.qAndAText}>
            <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
            <div  className={classes.wrapperQuestion}>
            <span className={classes.paragraph}>I have a contract. Can i sign up anyway?</span>
                        Of course, no problem. If you have a contract today, then that is yours to honor. But we treat your case confidentially so we keep your profile during your time with us private.
            If a club is interested in you, we contact you and take the it from there if or when that happens, with full descretion.
            </div>
          </div>
          <div className={classes.qAndAText}>
          <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
            <div className={classes.wrapperQuestion}>
            <span className={classes.paragraph}>How “good” do i have to be too sign up?</span>
            If you play in one of the two higest leagues you are interseted for the bank and also we have the new concept JACT prospect sessions that let us take in more players to look closer into. If you have any questions - just email us.
            </div>
            
          </div>
          <div className={classes.qAndAText}>
          <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
            <div className={classes.wrapperQuestion}>
            <span className={classes.paragraph}>I am a coach, can i sign up too?</span>
            Absolutely, many clubs and unions are always looking for alternatives and after coaches or other competencies around a team.
            </div>
           
          </div>
          <div className={classes.qAndAText}>
          <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
              <div className={classes.wrapperQuestion}>
              <span className={classes.paragraph}>When does it cost to be a part of JACT?</span>
            When we get a request information or if we tip a club of you and a deal is on the way, you decides if you want to go further, with or without us.
          A transfer is like genuin and taylormade from case to case, most of the the the client we represent pays, but in some case the club takes the economics in the transfer. Depending on the amount of time it takes to make a done deal, the fee is reglated, between 6000 sek and 9000 sek.
              </div>
            

          </div>
          <div className={classes.qAndAText}>
          <div className={classes.questionIcon}> <BsQuestionCircleFill color='#2e3c5e' size='40px'/></div>
            <div className={classes.wrapperQuestion}>
            <span className={classes.paragraph}>Why should I be in the playerbank?</span>
            The floorballscene is growing, fast, and we see a big developement in the “big 4” countries regarding new players crossing the different boarders and leagues.
Just becuse you are in the bank doesn´t  mean you have too change your situation, it only gives you alternative and opportunities to try something new.

            </div>
            
          </div>
        </div>
      );
}