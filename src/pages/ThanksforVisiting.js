import React from 'react';
import NavBar from '../components/NavBar';
import '../animateandrew.css'
import MeandJami from '../images/meandjami.png';
import Biking from '../images/biking.png';
import Kissy from '../images/kissy.png';
import Tongue from '../images/tongue.png';
import AndrewCropped from '../images/AndrewCroppedCenter.png';
import Vogueing from '../images/voguing.png';
import imtheboss from '../images/imtheboss.png';
function ThanksforVisiting() {
  return (
      <div>   
        <header>
          <NavBar />
        </header>
        <main>
          <section>
              <h2>Thanks for visiting! &#9829;</h2>
              <div class="set">
                  <div><img src={MeandJami} height='170' width='200'/></div>
                  <div><img src={Biking} height='230' width='170'/></div>
                  <div><img src={Kissy} height='200' width='150'/></div>
                  <div><img src={Tongue} height='170' width='190' class="rotate-90"/></div>
                  <div><img src={AndrewCropped} height='170' width='220'/></div>
                  <div><img src={Vogueing} height='170' width='170'/></div>
                  <div><img src={imtheboss} height='170' width='170' class="rotate-90"/></div>
              </div>
          </section>
        </main>
      </div>
  );
}

export default ThanksforVisiting