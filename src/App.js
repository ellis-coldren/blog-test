import './styles.css'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThanksforVisiting from './pages/ThanksforVisiting'
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/ThanksforVisiting" element = {<ThanksforVisiting/>}/>
      </Routes>
        
    </Router>
  );
}

export default App;
