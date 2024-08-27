import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.PNG';

function NavBar() {
    return(
      <nav id="nav">
        <img src={Logo} className="logo" alt="Logo" />
        <ul className="nav-list">
          <li className="active"><Link to="/">Home</Link></li>
          <li><a href="https://www.linkedin.com/in/catherine-ellis-coldren-a003b9196" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/ellis-coldren" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><Link to="/ThanksforVisiting">Thank you &#9829;</Link></li>
        </ul>
      </nav>
    );
}
export default NavBar
