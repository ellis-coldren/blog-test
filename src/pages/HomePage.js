import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Dog from '../images/profilepic2.PNG';
import Logo from '../images/Logo.PNG';
import SLThumbnail from '../images/SLThumbnail.PNG'
import DCThumbnail from '../images/DCThumbnail.PNG'
import WNThumbnail from '../images/WNThumbnail.PNG'
function HomePage() {
  return (
      <div>   
        <header>
          <NavBar/>
        </header>
        <main>
          <div class="homepage-row">
            <div class="intro-left">
              <img src={Dog}/>
            </div>
            <div class = "intro-right">
              <img src={Logo} class='center'/>
              
              <h3>I'm Ellis, a recent graduate of Boston University with a passion for problem solving. <br/>
              I studied math and computer science and focused on topology and geometry processing. <br/> 
              I am originally from Nashville, TN and enjoy music, cooking, and biking.</h3>
            </div>
            <hr/>
          </div>

          <div class="homepage-row">
            <div class= "project-item">
              <img src={SLThumbnail} class='center'/>
              <p class='desc'> An interactive UI to demonstrate the proof and applications of Sperner's Lemma, made in Unity</p>
              <ul className="nav-list">
                <li><Link to="/SpernersLemma">Sperner's Lemma</Link></li>
              </ul>
            </div>
            <div class= "project-item">
              <img src={DCThumbnail} class='center'/>
              <p class='desc'> An expository paper on the relationship between the homology and deRham cohomology groups of smooth manifolds, advised by Professor Takashi Kimura</p>
              <ul className="nav-list">
                <li><Link to="/DeRham">DeRham Cohomology</Link></li>
              </ul>
            </div>
            <div class= "project-item">
              <img src={WNThumbnail} class='center'/>
              <p class='desc'> A paper on how the winding number can be used to segment sketches. </p>
              <ul className="nav-list">
                <li><a href="http://dx.doi.org/10.1111/cgf.15141" target="_blank" rel="noopener noreferrer">Winding Number</a></li>
              </ul>
            </div>
          </div>

        </main>

      </div>
  );
}

export default HomePage