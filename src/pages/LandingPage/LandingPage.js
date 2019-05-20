import React from 'react';
import landingPageParticleConfig from '../../assets/json/landing-particlesjs-config.json';
import Particle from '../../components/Particle/Particle'
import './LandingPage.css'
import Scroller from '../../components/Scroller/Scroller'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="LandingPage">
      <div id="Greeting"><h1>Hello. I am <span id="GreetingName">Tony Hu</span><br/>I am a Computer Engineer. </h1> </div>
      <div id="Particles"><Particle particleConfig={landingPageParticleConfig}/></div>
      <div id="Scroller"><Scroller nextSection="AboutPage"/></div>
        </div>
  );
  }
}

export default LandingPage;
