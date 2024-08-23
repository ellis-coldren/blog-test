import './styles.css'
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThanksforVisiting from './pages/ThanksforVisiting'
import SpernersLemma from './pages/SpernersLemma'
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/SpernersLemma" element = {<SpernersLemma/>}/>
        <Route path = "/ThanksforVisiting" element = {<ThanksforVisiting/>}/>
      </Routes>
        
    </Router>
  );
}

export default App;
