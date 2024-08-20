import React from 'react';
import NavBar from '../components/NavBar';
import Dog from '../images/dogblah.png'
function HomePage() {
  return (
      <div>   
        <header>
          <NavBar/>
        </header>
        <main>
          <h3>Hi! My name is Ellis and I am a recent graduate of Boston University with a Bachelors in Math and Computer Science and a Masters in Mathematics. I am originally from Nashville, TN and enjoy music, cooking, and biking.</h3>
          <hr/>
          <img src={Dog} className = "center"/>
        </main>
      </div>
  );
}

export default HomePage