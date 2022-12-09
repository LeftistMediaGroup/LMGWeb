import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/navbar.js';
import Home from './components/home.js';
import Education from './components/education.js';

function App() {
  return (
    <>
    
    <Navbar></Navbar>

    <BrowserRouter>
      <Routes>
        <Route path="/education" element = {<Education />} >
        </Route>

        <Route exact path="/" element = {<Home />} >
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;