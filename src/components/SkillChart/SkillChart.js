import React from 'react';
import SkillBar from 'react-skillbars';

class SkillChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      skills: this.props.skills,
      colors:this.props.colors,
      animationDuration:this.props.animationDuration
    }
  }
  render() {
    return (
      <SkillBar skills={this.state.skills}  colors={this.state.colors} animationDuration={this.state.animationDuration}/>
    );
  }
}

export default SkillChart;
