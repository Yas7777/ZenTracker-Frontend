// Import dependencies
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState } from 'react';

// Import Pages
import HomePage from './pages/HomePage.js'
import AddEntryPage from './pages/CreateMoodPage.js'
import EditEntryPage from './pages/EditMoodPage.js'

// Import Components, styles, media, navbar, dark mode
import './App.css';
import useDarkMode from "./useDarkMode";
import Navbar from "./Navbar"
function App() {

  const [entryToEdit, setEntryToEdit] = useState([]);
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
      <Router>
          <header>
              <div id="bannerimage"></div>
          </header>
        <Navbar/>
          <div className="container">
              <Route path='/' exact>
                  <HomePage setEntryToEdit={setEntryToEdit}/>
              </Route>

              <Route path='/Add'>
                  <AddEntryPage/>
              </Route>

              <Route path='/edit'>
                  <EditEntryPage entryToEdit={entryToEdit} />
              </Route>
          </div>


        <footer>
            <p> Currently:{darkMode ?'Dark':'Light'} Mode</p>
            <h6>  <switch onClick={()=>toggleDarkMode()}>Switch</switch></h6>
          </footer>

      </Router>

  );
}

export default App;

