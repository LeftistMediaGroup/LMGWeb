import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/navbar.js';
import Home from './components/home.js';
import Education from './components/education.js';


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

          <Route exact path="/" element = {<Home />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    </>
  );
}

export default App;