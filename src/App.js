import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
function App() {
    return ( 
        <Router>
            <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route  path='/contact' element = {<Contact/>}/>
            </Routes>
        </Router>
     );
}

export default App;