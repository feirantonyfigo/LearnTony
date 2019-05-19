import React from 'react';
import landingPageParticleConfig from '../../assets/json/landing-particlesjs-config.json';
import Particle from '../../components/Particle/Particle'
import './LandingPage.css'


class LandingPage extends React.Component {
  render() {
    return (
      <div className="LandingPage">
      <div id="Greeting"><h1>Hello. I am <span id="GreetingName">Tony Hu</span><br/>I am a Computer Engineer. </h1> </div>
      <div id="Particles"><Particle particleConfig={landingPageParticleConfig}/></div>
        </div>
  );
  }
}

export default LandingPage;
