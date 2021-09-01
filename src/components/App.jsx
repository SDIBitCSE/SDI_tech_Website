import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//React imports
import Foot from './Footer/Footer';
import Header from './Header/Navbar';
//Basic components
import PageContent from './Content/Landing page/PageContent';
import Contact from './Content/Other pages/Contact Us/Contact';
import Register from './Content/Other pages/Register/Register';
//Pages

import "./App.css";
//imports
function App() { 
    return(<Router>
    <Switch>
    <Route exact path="/"><div className="bg_image_home"><Header/><PageContent/><Foot/></div></Route>
    <Route exact path="/about"><div className="bg_image_about"><Header/></div></Route>
    <Route exact path="/team"><div className="bg_image_team"><Header/></div></Route>
    <Route exact path="/events"><div className="bg_image_events"><Header/></div></Route>
    <Route exact path="/contact"><div className="bg_image_contact"><Header/><Contact/></div></Route>
    <Route exact path="/register"><div className="bg_image_register"><Header/><Register/></div></Route>
    </Switch>
    </Router>)
}
//functions
export default App;
//exports
