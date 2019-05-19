import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
    <div className="NavBar" id="NavBar"><NavBar /></div>
    <div className="LandingPage"id="LandingPage"><LandingPage /></div>
    <div className="AboutPage" id="AboutPage"><AboutPage /></div>
    <div className="ExperiencePage" id="ExperiencePage"><ExperiencePage/></div>
    <div className="PortfolioPage" id="PortfolioPage"><PortfolioPage/></div>
    <div className="ContactPage" id="ContactPage"><ContactPage/></div>
    <div className="Footer" id="Footer"><Footer /></div>
    </div>
  );
}

export default App;
