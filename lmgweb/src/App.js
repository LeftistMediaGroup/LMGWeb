import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/navbar.js';
import Home from './components/home.js';
import Education from './components/education.js';
import Volunteering from './components/volunteering.js';
import Music from './components/music.js';
import Account from './components/account.js';
import Admin from './components/admin.js';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  
  card: {
    p: 2,
    m: 2
  }
});

darkTheme.spacing(2);

function App() {
  return (
    <>
    
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />

      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/education" element = {<Education />} >
          </Route>

          <Route path="/volunteering" element = {<Volunteering/>} >
          </Route>

          <Route exact path="/music" element = {<Music />} >
          </Route>

          <Route exact path="/account" element = {<Account />} >
          </Route>

          <Route exact path="/admin" element = {<Admin />} >
          </Route>

          <Route exact path="/" element = {<Home />} >
          </Route>
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    </>
  );
}

export default App;