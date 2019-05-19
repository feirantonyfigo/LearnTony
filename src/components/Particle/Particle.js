import React from 'react';
import Particles from 'react-particles-js';
class Particle extends React.Component {
  constructor(props){
    super(props);
    this.particleConfig = this.props.particleConfig;
  }
  render() {
    return (
      <Particles
    params={this.particleConfig} />
  );
  }
}

export default Particle;
